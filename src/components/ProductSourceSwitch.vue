<template>
  <div>
    <span class="md-subheading">Product source: </span><br/>
    <md-switch v-model="amazon" class="md-primary">Amazon</md-switch><br/>
    <md-switch v-model="lazada" class="md-primary">Lazada</md-switch><br/>
    <md-switch v-model="shopee" class="md-primary">Shopee</md-switch><br/>
  </div>
</template>

<script>
export default {
  name: 'ProductSourceSwitch',
  data () {
    return this.$store.getters.getProductSources
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
