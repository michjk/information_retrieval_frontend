import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchProductText: null,
    productSources: {
      amazon: true,
      lazada: true,
      shopee: true
    },
    findSimilarState: false,
    listSimilarResult: [],
    listResponseSimilarResult: []
  },
  getters: {
    getProductSources: state => state.productSources,
    getSearchProductText: state => state.searchProductText,
    getFindSimilarState: state => state.findSimilarState,
    getListSimilarResult: state => state.listSimilarResult,
    getListResponseSimilarResult: state => state.listResponseSimilarResult
  },
  mutations: {
    updateProductSources: (state, payload) => {
      state.productSources[payload.name] = payload.value
    },
    updateSearchProductText: (state, text) => {
      state.searchProductText = text
    },
    updateFindSimilarState: (state, value) => {
      state.findSimilarState = value
    },
    pushToListSimilarResult: (state, value) => {
      state.listSimilarResult.push(value)
    },
    resetListSimilarResult: (state) => {
      state.listSimilarResult = []
    },
    deleteFromListSimilarState: (state, value) => {
      const bufferListSimilarResult = state.listSimilarResult
      state.listSimilarResult = []

      bufferListSimilarResult.forEach((similarResult) => {
        if (similarResult !== value) {
          state.listSimilarResult.push(similarResult)
        }
      })
    },
    updateListResponseSimilarResult: (state, value) => {
      state.listResponseSimilarResult = value
    }
  }
})
