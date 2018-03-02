<template>
  <div id="app">
    <md-autocomplete
      v-model="searchProductText"
      :md-options="productList">
      <label>Enter item name</label>
    </md-autocomplete>
  </div>
</template>

<script>
export default {
  data () {
    return {
      searchProductText: null,
      productList: [
        'book',
        'phone',
        'TV'
      ]
    }
  }
}
</script>

<style scoped>
#app {
  margin-top: 50px
}
</style>
