<template>
  <div id="home-page-div-root">
    <div class="md-layout">
        <div class="md-layout-item md-size-35"></div>
        <div class="logo md-layout-item md-size-30">
            <img class="logo" src="@/assets/logo_pricey.png"/>
            <span class="md-headline" >Price comparison for e-commerce product</span>
        </div>
        <div class="md-layout-item md-size-35"></div>
    </div>
    <div class="md-layout md-alignment-top-center">
        <div class="md-layout-item md-size-50">
            <search-product-input/>
        </div>
    </div>
    <div class="md-layout md-alignment-top-center">
        <div class="md-layout-item md-size-50">
            <product-source-switch/>
        </div>
    </div>
    <!-- ICON TO GO TO THE PAGE OF DATA ANALYTIC -->
    <span
      id="icon_data_analytic"
      v-on:click="goToDataAnalyticPage"
    >
      <md-icon
        color="#505050"
        class="md-size-2x"
      >insert_chart
      </md-icon>
      <md-tooltip md-direction="top">Data analytic page</md-tooltip>
    </span>

    <div>
    </div>
  </div>
</template>

<script>

import SearchProductInput from '@/components/SearchProductInput'
import ProductSourceSwitch from '@/components/ProductSourceSwitch'
import router from './../router'

export default {
  name: 'HomePage',
  components: {
    'search-product-input': SearchProductInput,
    'product-source-switch': ProductSourceSwitch
  },
  methods: {
    goToDataAnalyticPage: function () {
      router.push('data_analytic')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#home-page-div-root {
    padding-top: 200px
}

#icon_data_analytic {
  position: absolute;
  bottom: 12px;
  left: 12px;
  cursor: pointer;
}

.logo {
  text-align: center;
  margin-bottom: 10px;
}

</style>
