<template>
  <div class="md-layout md-alignment-center-space-between">
    <div class="md-layout-item md-size-75">
        <md-autocomplete v-model="searchProductText" :md-options="productList" @input="fecthSuggestion">
        <label>Enter item name</label>
        </md-autocomplete>
    </div>
    <div class="md-layout-item md-size-25">
        <md-button class="md-raised md-accent">Find product</md-button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import {searchProductApiUrl} from '@/constants'
export default {
  name: 'SearchProductInput',
  data () {
    return {
      searchProductText: this.$store.getters.getSearchProductText,
      productList: []
    }
  },
  methods: {
    updateSearchProductText () {
      this.$store.commit('updateSearchProductText', this.searchProductText)
    },
    fecthSuggestion (text) {
      const payload = {
        query: text
      }
      console.log(searchProductApiUrl)
      axios.post(searchProductApiUrl, payload).then(res => {
        this.productList = res.data.list_product.map(product => {
          return product.product_name
        })
      })
    }
  }
}
</script>

<style scoped>
</style>
