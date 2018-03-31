<template>
  <div id="left_panel_dashboard">
    <div id="product_source">
      Product Source
    </div>
    <div>
      <div>
        <md-switch v-model="amazon" class="md-primary" @change="updateProductSources('amazon', $event)">Amazon</md-switch>
      </div>
      <div>
        <md-switch v-model="lazada" class="md-primary" @change="updateProductSources('lazada', $event)">Lazada</md-switch>
      </div>
      <div>
        <md-switch v-model="shopee" class="md-primary" @change="updateProductSources('shopee', $event)">Shopee</md-switch>
      </div>
    </div>
  </div>
</template>

<script>

// Components

export default {
  name: 'LeftDrawer',
  data () {
    return this.$store.getters.getProductSources
  },
  methods: {
    updateProductSources (name, value) {
      console.log("debug test", name+value);
      const payload = {
        name,
        value
      }
      this.$store.commit('updateProductSources', payload)
    }
  }
}
</script>

<style>
  @import './styles/SearchResultPage.css';
</style>
