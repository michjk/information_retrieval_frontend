import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchProductText: 'hello',
    productSources: {
      amazon: true,
      lazada: true,
      shopee: true
    }
  },
  getters: {
    getProductSources: state => state.productSources,
    getSearchProductText: state => state.searchProductText
  },
  mutations: {
    updateProductSources: (state, payload) => {
      state.productSources[payload.name] = payload.value
    },
    updateSearchProductText: (state, text) => {
      state.searchProductText = text
    }
  }
})
