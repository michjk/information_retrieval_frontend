<template>
  <div>
    <span class="md-subheading">Product source: </span><br/>
    <md-switch v-model="amazon" class="md-primary" @change="updateProductSources('amazon', $event)">Amazon</md-switch><br/>
    <md-switch v-model="lazada" class="md-primary" @change="updateProductSources('lazada', $event)">Lazada</md-switch><br/>
    <md-switch v-model="shopee" class="md-primary" @change="updateProductSources('shopee', $event)">Shopee</md-switch><br/>
  </div>
</template>

<script>
export default {
  name: 'ProductSourceSwitch',
  data () {
    return this.$store.getters.getProductSources
  },
  methods: {
    updateProductSources (name, value) {
      const payload = {
        name,
        value
      }
      this.$store.commit('updateProductSources', payload)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
