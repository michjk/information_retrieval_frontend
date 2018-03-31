<template>
  <div>
    <div class="md-layout">
      <div class="md-layout-item md-size-85">
          <md-autocomplete v-model="searchProductText"
                           @md-changed="fecthSuggestion"
                           @md-opened="fecthSuggestion"
                           id="md-input-1o95t1doe"
                           :md-options="productList" md-layout="box"
                           @keyup.enter.native = "goToResultPage"
                           md-dense
          >
            <label>Enter item name</label>
          </md-autocomplete>
      </div>

      <div class="md-layout-item md-size-15">
          <md-button class="md-raised md-accent" id="find_product" v-on:click="goToResultPage">
            Find product
          </md-button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import {searchProductApiUrl} from '@/constants'
import router from './../../router'

export default {
  name: 'SearchProductInput',
  created () {

  },
  data () {
    return {
      searchProductText: this.$store.getters.getSearchProductText,
      productList: [],
      productSources: this.$store.getters.getProductSources
    }
  },
  methods: {
    updateSearchProductText () {
      this.$store.commit('updateSearchProductText', this.searchProductText)
    },
    fecthSuggestion (text) {
      this.productList = new Promise((resolve) => {
        const payload = {
          query: text
        }
        axios.post(searchProductApiUrl, payload).then(res => {
          let tmp = res.data.list_product.map(product => {
            return product.product_name
          })
          resolve(tmp)
        })
      })
    },
    goToResultPage (event) {

      if (!(this.searchProductText)) {
        return
      }
      console.log('debug event', event)
      const amazonIsChosen = this.productSources.amazon ? 'amazon' : ''
      const shopeeIsChosen = this.productSources.shopee ? 'shopee' : ''
      const lazadaIsChosen = this.productSources.lazada ? 'lazada' : ''

      let shopQueryString = amazonIsChosen + ',' + shopeeIsChosen + ',' + lazadaIsChosen

      router.push(`result?product_name=${this.searchProductText}&offset=0&limit=27&shop=${shopQueryString}`)
    }
  }
}
</script>

<style>
  @import './styles/Search.css';
</style>
