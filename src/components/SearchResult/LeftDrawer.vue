<template>
  <div id="left_panel_dashboard">
    <div id="product_source">
      Product Source
    </div>
    <div>
      <div>
        <md-switch v-model="booleanAmazon">Amazon</md-switch>
      </div>
      <div>
        <md-switch v-model="booleanLazada">Lazada</md-switch>
      </div>
      <div>
        <md-switch v-model="booleanShopee">Shopee</md-switch>
      </div>
    </div>
  </div>
</template>

<script>

// Components

export default {
  name: 'LeftDrawer',
  data: () => ({
    booleanAmazon: true,
    booleanLazada: true,
    booleanShopee: true
  })
}
</script>

<style>
  @import './styles/SearchResultPage.css';
</style>
