<template>
  <div>
    <div class="md-layout md-alignment-center-space-between">
      <div class="md-layout-item md-size-85">
          <md-autocomplete v-model="searchProductText"
                           @md-changed="fecthSuggestion"
                           @md-opened="fecthSuggestion"
                           :md-options="productList" md-layout="box"
                           @keyup.enter.native = "goToResultPage"
                           md-dense
          >
            <label>Enter item name</label>
          </md-autocomplete>
      </div>
      <div class="md-layout-item md-size-15">
          <md-button id="md-button" class="md-raised md-accent" v-on:click="goToResultPage">
					Search
          </md-button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import {searchProductApiUrl} from '@/constants'
import router from './../router'

export default {
  name: 'SearchProductInput',
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

      const amazonIsChosen = this.productSources.amazon ? 'amazon' : ''
      const shopeeIsChosen = this.productSources.shopee ? 'shopee' : ''
      const lazadaIsChosen = this.productSources.lazada ? 'lazada' : ''

      let shopQueryString = amazonIsChosen + ',' + shopeeIsChosen + ',' + lazadaIsChosen

      router.push(`result?product_name=${this.searchProductText}&offset=0&limit=28&shop=${shopQueryString}`)
    }
  }
}
</script>

<style scoped>
.md-button {
  height: 45px;
  margin-bottom: 25px;
}
</style>
