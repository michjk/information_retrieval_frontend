<template>
  <div>
      <search-result-card
        v-for="card in listCard"
        :productName="card.product_name"
        :productId="card.product_id"
        :imageLink="card.image_link"
				:shopImage="card.shop_image"
        :originalPrice="card.original_price"
        :currentPrice="card.current_price"
        :productDescription="card.description"
        :shop="card.shop"
        v-bind:key="card.id"
        class="item_card"
      >
      </search-result-card>

      <div id="button_panel">
        <md-button class="md-accent" v-on:click="prevPage">Prev</md-button>
        <md-button class="md-accent" v-on:click="nextPage">Next</md-button>
      </div>

  </div>
</template>

<script>

// Components
import SearchResultCard from '@/components/SearchResult/SearchResultCard'

// utils
import {searchListProductApiUrl, searchMoreResultApiUrl} from '@/constants'
import axios from 'axios'
import { getParameterByName, checkURL } from './../commons/Utils'

export default {
  name: 'ListSearchResult',
  data: function () {
    return {
      PRODUCT_NAME: 'product_name',
      FIND_SIMILAR_RESULT: 'find_similar_result',
      SHOP: 'shop',
      OFFSET: 'offset',
      LIMIT: 'limit',
      total: 0,
      offset: 0,
      limit: 27,
      listCard: [
        {
          productName: 'Single',
          productId: 'Sub title',
          imageLink: 'image link',
					shopImage: 'shop image',
          originalPrice: 'original price',
          currentPrice: 'old_price',
          id: 1,
          description: 'description'
        }
      ]
    }
  },
  created () {
    // call the API
    this.offset = parseInt(getParameterByName(this.OFFSET))
    this.limit = parseInt(getParameterByName(this.LIMIT))
    this.callApi()
  },
  components: {
    'search-result-card': SearchResultCard
  },

  methods: {
    prevPage: function () {
      const offset = this.offset - this.limit
      if (offset >= 0) {
        this.offset = offset
        this.callApi()
      }
    },

    nextPage: function () {
      const offset = this.offset + this.limit
      if (offset < this.total) {
        this.offset = offset
        this.callApi()
      }
    },

		getShopImage: function(shop) {
			console.log("in here")
			switch(shop) {
				case 'shopee':
					return 'https://theme.zdassets.com/theme_assets/1299374/1defb8e5d29ada786c907821fbd17894a08fff4d.png'
				case 'lazada':
					return 'https://laz-img-cdn.alicdn.com/tfs/TB15BYfh4rI8KJjy0FpXXb5hVXa-200-200.png'
				case 'amazon':
					return 'https://pmcdeadline2.files.wordpress.com/2015/08/amazon-featured-image.jpg?w=446&h=299&crop=1'
				default:
					return null
			}
		},

    callApi: function () {
      const findSimilarResult = getParameterByName(this.FIND_SIMILAR_RESULT)
      let thisApp = this

      // will check whether it is a called to get similar result
      if (findSimilarResult != null) {
        const payload = JSON.parse(findSimilarResult)
        thisApp.listCard = []

        // set the switch back to false
        this.$store.commit('updateFindSimilarState', false)

        axios.post(searchMoreResultApiUrl, payload).then(
          (result) => {
            result.data.list_product.forEach((product) => {
              if (checkURL(product.image_link)) {
                thisApp.listCard.push(product)
              } else {
                product.image_link = 'http://hnctruckparts.com/images/stories/virtuemart/product/unavailable921.jpg'
                thisApp.listCard.push(product)
              }
            })
          }
        )
      } else {
        const productName = getParameterByName(this.PRODUCT_NAME)
        const shop = getParameterByName(this.SHOP)
        let thisApp = this

        thisApp.listCard = []

        axios.get(searchListProductApiUrl + '?' + this.PRODUCT_NAME + '=' +
          productName + '&' + this.OFFSET + '=' + this.offset + '&' + this.LIMIT + '=' + this.limit + '&' +
          this.SHOP + '=' + shop
        )
          .then((response) => {
            thisApp.total = response.data.total

            response.data.list_product.forEach((product) => {
							
							product.shop_image = this.getShopImage(product.shop)
              if (checkURL(product.image_link)) {
                thisApp.listCard.push(product)
              } else {
                product.image_link = 'http://hnctruckparts.com/images/stories/virtuemart/product/unavailable921.jpg'
                thisApp.listCard.push(product)
              }

            })
          }
          )
          .catch((err) => console.log('err', err))
      }
    }
  },
  watch: {
    '$route' () {
      this.callApi()
    }
  }
}
</script>

<style>
  @import './styles/SearchResultPage.css';
</style>
