<template>
  <div>
    <span class="md-subheading">Product source: </span><br/>
    <md-switch v-model="amazon_source" class="md-primary">Amazon</md-switch><br/>
    <md-switch v-model="lazada_source" class="md-primary">Lazada</md-switch><br/>
    <md-switch v-model="shopee_source" class="md-primary">Shopee</md-switch><br/>
  </div>
</template>

<script>
export default {
  name: 'ProductSourceSwitch',
  data () {
    return {
      amazon_source: true,
      lazada_source: true,
      shopee_source: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
