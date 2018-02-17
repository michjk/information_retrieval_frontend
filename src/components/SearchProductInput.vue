<template>
  <div class="md-layout md-alignment-center-space-between">
    <div class="md-layout-item md-size-75">
        <md-autocomplete
        v-model="searchProductText"
        :md-options="productList">
        <label>Enter item name</label>
        </md-autocomplete>
    </div>
    <div class="md-layout-item md-size-25">
        <md-button class="md-raised md-accent">Find product</md-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchProductInput',
  data () {
    return {
      searchProductText: null,
      productList: []
    }
  }
}
</script>

<style scoped>
</style>
