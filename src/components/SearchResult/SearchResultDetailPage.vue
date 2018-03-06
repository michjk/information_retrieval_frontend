<template>
  <div id="div-root">
    <header-search-result />
    <div id="div-body" class="md-layout">
      <div class="md-layout-item">
        <div class="md-layout">
          <div class="md-layout-item">
            <span class="md-headline">{{product_category}} > {{product.product_name}}</span>
          </div>
        </div>
        <div id="md-layout-content" class="md-layout">
          <div class="md-layout-item">
            <md-content id = "md-content-content" class="md-elevation-4">
              <div class="md-layout md-gutter">
                <div id = "md-layout-item" class="md-layout-item md-size-30">
                  <img class="product-image" v-bind:src="product.image_link"/>
                </div>
                <div id="md-layout-text" class="md-layout-item md-size-70">
                  <div class="md-layout md-alignment-top-space-between">
                    <div class="md-layout-item md-size-60">
                      <span class="md-display-1">{{product.product_name}}</span>
                    </div>
                    <div class="md-layout-item md-size-20">
                      <a :href="product.product_link"><md-button class="md-accent md-raised custom-button-size">Product page</md-button></a>
                    </div>
                  </div>
                  <div class="md-layout">
                    <div class="md-layout-item">
                      <img class="vendor-icon" v-bind:src="shopIconLink"/>
                    </div>
                  </div>
                  <div class="md-layout">
                    <div class="md-layout-item">
                      <div id="current-price" class="md-headline">{{product.current_price!=-1 ? product.current_price : product.original_price}}</div>
                      <div v-if="product.current_price!=-1" id="previous-price" class="md-subheading">{{product.current_price}}</div>
                    </div>
                  </div>
                  <div class="md-layout md-gutter md-alignment-center-space-between">
                    <div class="md-layout-item md-size-25">
                      <star-rating v-bind:increment="0.01" read-only=true v-model="product.rating"></star-rating>
                    </div>
                    <div class="md-layout-item md-size-70">
                      <md-button id="review" class="custom-button-size">{{review}} Review </md-button>
                    </div>
                  </div>
                  <div class="md-layout">
                    <div class="md-layout-item">
                      <p class="md-body-1">{{product.product_description}}</p>
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
      product: {}
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
        return 'https://pmcdeadline2.files.wordpress.com/2015/08/amazon-featured-image.jpg?w=446&h=299&crop=1'
      }

      return 'https://theme.zdassets.com/theme_assets/1299374/1defb8e5d29ada786c907821fbd17894a08fff4d.png'
    }
  },
  methods: {
    callApi: function () {
      const productId = this.$route.query.product_id
      const shop = this.$route.query.shop

      axios.get(productDetailApiUrl + '?' + this.PRODUCT_ID + '=' +
        productId + '&' + this.SHOP + '=' + shop)
        .then((response) => {
          console.log(response.data.product)
          for (let i in response.data.product) {
            this.$set(this.product, i, response.data.product[i])
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
