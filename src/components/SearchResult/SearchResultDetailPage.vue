<template>
  <div id="div-root">
    <header-search-result />
    <div id="div-body" class="md-layout">
      <div class="md-layout-item">
        <div id="md-layout-content" class="md-layout">
          <div class="md-layout-item">
            <md-content id = "md-content-content" class="md-elevation-4">
              <div class="product_wrapper md-layout md-gutter">
								<div class="product_button_wrapper">
									<a :href="product.product_link" target="_blank"><md-button :disabled="this.getPrintedPrice(product) === null" class="md-accent md-raised custom-button-size">Product page</md-button></a>
									<div class="source_wrapper">
                      <img class="vendor-icon" v-bind:src="shopIconLink"/>
									</div>
								</div>
                <div id = "md-layout-item" class="md-layout-item md-size-30">
                  <img class="product-image" v-bind:src="product.image_link"/>
                </div>
                <div id="md-layout-text" class="md-layout-item md-size-70">
                  <div class="md-layout md-alignment-top-space-between">
                    <div class="md-layout-item md-size-60">
                      <span class="product_name md-title">{{product.product_name}}</span>
                    </div>
                  </div>
                  <div class="md-layout">
                    <div class="md-layout-item">
											<div class="heading">Price</div>
											<div class="price_wrapper">
												<div v-if="product.current_price!=-1 && product.current_price !== product.original_price" id="previous-price" class="md-subheading">{{product.current_price > product.original_price ? product.current_price : product.original_price}}</div>
												<div id="current-price" class="md-headline">{{ this.getPrintedPrice(product) ? this.getPrintedPrice(product) : "Product not Available" }}</div>
											</div>
                    </div>
                  </div>
									<div class="md-layout">
                    <div class="md-layout-item">
											<p class="heading">Product Description</p>
                      <p class="product_description md-body-1">{{product.product_description}}</p>
                    </div>
                  </div>
									<div class="md-layout">
                    <div class="md-layout-item">
											<p class="heading">Product Review</p>
											<div v-bind:style="buttonStyle" class="sentiment">
												<p>{{product.semantic_value}}</p>
											</div>
                    </div>
                  </div>

                </div>
              </div>
            </md-content>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {productDetailApiUrl} from '@/constants'
import {StarRating} from 'vue-rate-it'
import HeaderSearchResult from '@/components/SearchResult/HeaderSearchResult'
import axios from 'axios'
import { checkURL } from './../commons/Utils'

export default {
  name: 'SearchResultDetailPage',
  data () {
    return {
      PRODUCT_ID: 'product_id',
      SHOP: 'shop',
      SHOPEE: 'shopee',
      LAZADA: 'lazada',
      AMAZON: 'amazon',
      product_category: 'Category XYZ',
      review: 'Positive',
      product: {},
      buttonStyle: {
        'color': 'white',
        'background-color': '#4CAF50'
      }
    }
  },
  components: {
    'header-search-result': HeaderSearchResult,
    'star-rating': StarRating
  },
  computed: {
    shopIconLink: function () {
      if (this.$route.query.shop === this.SHOPEE) {
        return 'https://theme.zdassets.com/theme_assets/1299374/1defb8e5d29ada786c907821fbd17894a08fff4d.png'
      } else if (this.$route.query.shop === this.LAZADA) {
        return 'https://laz-img-cdn.alicdn.com/tfs/TB15BYfh4rI8KJjy0FpXXb5hVXa-200-200.png'
      } else if (this.$route.query.shop === this.AMAZON) {
        return 'https://upload.wikimedia.org/wikipedia/commons/7/70/Amazon_logo_plain.svg'
      }

      return null
    }
  },
  methods: {
		getPrintedPrice(product) {
			const { current_price, original_price } = product;
			let price;

			if (current_price == -1 && original_price == -1) {
				price = null;
			}
			else if (current_price != -1 && current_price < original_price) {
				price = current_price
			}
			else {
				price = original_price
			}

			return price;
		},
    callApi: function () {
      const productId = this.$route.query.product_id
      const shop = this.$route.query.shop

      axios.get(productDetailApiUrl + '?' + this.PRODUCT_ID + '=' +
        productId + '&' + this.SHOP + '=' + shop)
        .then((response) => {
          for (let i in response.data.product) {
            let dataInserted = response.data.product[i]

            if (i === 'image_link' && !checkURL(response.data.product[i])) {
              dataInserted = 'http://hnctruckparts.com/images/stories/virtuemart/product/unavailable921.jpg'
            } else if (i === 'semantic_value') {
              if (response.data.product[i] === 0) {
                dataInserted = 'neutral'
                this.buttonStyle = {
                  'color': 'white',
                  'backgroundColor': '#999'
                }
              } else if (response.data.product[i] === -1) {
                dataInserted = 'negative'
                this.buttonStyle = {
                  'color': 'white',
                  'backgroundColor': 'red'
                }
              } else {
                dataInserted = 'positive'
                this.buttonStyle = {
                  'color': 'white',
                  'backgroundColor': 'green'
                }
              }
            } else if (i === "original_price" || i === "current_price") {
								dataInserted = dataInserted === "$0.00" ? "-1" : dataInserted
						}


            this.$set(this.product, i, dataInserted)
          }
        }
        )
        .catch((err) => console.log('err', err))
    }
  },
  created () {
    this.callApi()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import './styles/SearchResultDetailPage.css';
</style>
