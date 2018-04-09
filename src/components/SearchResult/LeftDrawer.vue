<template>
  <div id="left_panel_dashboard">
    <div class="title_sub_div">
      Source:
    </div>
    <div>
      <div>
        <md-switch v-model="productSources.amazon" class="md-primary" @change="updateProductSources('amazon', $event)">Amazon</md-switch>
      </div>
      <div>
        <md-switch v-model="productSources.lazada" class="md-primary" @change="updateProductSources('lazada', $event)">Lazada</md-switch>
      </div>
      <div>
        <md-switch v-model="productSources.shopee" class="md-primary" @change="updateProductSources('shopee', $event)">Shopee</md-switch>
      </div>
    </div>

    <div id="find_similar">
      <div>
        <md-switch v-model="findSimilarState" class="md-primary" @change="updateFindSimilarState($event)">Find Similar</md-switch>
      </div>
      <div id="find_similar_button">
        <md-button class="md-raised md-accent" :disabled="!findSimilarState" v-on:click="clickFindMoreResult" v->Search</md-button>
      </div>
    </div>
  </div>
</template>

<script>

// Components
import router from './../../router'
import { getParameterByName } from './../commons/Utils'

export default {
  name: 'LeftDrawer',
  data () {
    return {
      productSources: this.$store.getters.getProductSources,
      searchProductText: this.$store.getters.getSearchProductText,
      listSimilarResult: this.$store.getters.getListSimilarResult
    }
  },
  computed: {
    findSimilarState () {
      return this.$store.getters.getFindSimilarState
    }
  },
  methods: {
    updateProductSources (name, value) {
      const payload = {
        name,
        value
      }
      this.$store.commit('updateProductSources', payload)

      const amazonIsChosen = this.productSources.amazon ? 'amazon' : ''
      const shopeeIsChosen = this.productSources.shopee ? 'shopee' : ''
      const lazadaIsChosen = this.productSources.lazada ? 'lazada' : ''

      let shopQueryString = amazonIsChosen + ',' + shopeeIsChosen + ',' + lazadaIsChosen

      router.push(`result?product_name=${getParameterByName('product_name')}&offset=0&limit=27&shop=${shopQueryString}`)
    },
    updateFindSimilarState (value) {
      this.$store.commit('updateFindSimilarState', value)
    },
    clickFindMoreResult () {
      if (!this.$store.getters.getFindSimilarState) return

      const payload = {
        list_product_name: this.$store.getters.getListSimilarResult,
        initial_query: getParameterByName('product_name')
      }
      const amazonIsChosen = this.productSources.amazon ? 'amazon' : ''
      const shopeeIsChosen = this.productSources.shopee ? 'shopee' : ''
      const lazadaIsChosen = this.productSources.lazada ? 'lazada' : ''
      let shopQueryString = amazonIsChosen + ',' + shopeeIsChosen + ',' + lazadaIsChosen
      console.log('debug event', shopQueryString)
      router.push(`result?find_similar_result=${JSON.stringify(payload)}&product_name=${getParameterByName('product_name')}&offset=0&limit=27&shop=${shopQueryString}`)
    }
  }
}
</script>

<style>
  @import './styles/SearchResultPage.css';

.title_sub_div {
  font-weight: bold;
}

.md-primary {
  margin: 16px 0 0 0;
}

.find_similar {
  font-weight: bold;
}

#find_similar_button {
  margin: 8px 0 0;
  align-self: center;
}
</style>
