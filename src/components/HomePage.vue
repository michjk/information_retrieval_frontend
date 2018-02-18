<template>
  <div id="home-page-div-root">
    <div class="md-layout">
        <div class="md-layout-item md-size-35"></div>
        <div class="md-layout-item md-size-30">
            <img src="@/assets/logo_pricey.png"/>
            <span class="md-headline">Price comparison for e-commerce product</span>
        </div>
        <div class="md-layout-item md-size-35"></div>
    </div>
    <div class="md-layout md-alignment-top-center">
        <div class="md-layout-item md-size-30">
            <search-product-input/>
        </div>
    </div>
    <div class="md-layout md-alignment-top-center">
        <div class="md-layout-item md-size-30">
            <product-source-switch/>
        </div>
    </div>
  </div>
</template>

<script>
import SearchProductInput from '@/components/SearchProductInput'
import ProductSourceSwitch from '@/components/ProductSourceSwitch'

export default {
  name: 'HomePage',
  components: {
    'search-product-input': SearchProductInput,
    'product-source-switch': ProductSourceSwitch
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#home-page-div-root {
    padding-top: 200px
}
</style>
