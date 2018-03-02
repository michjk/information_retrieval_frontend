<template>
  <div class="md-layout md-gutter md-alignment-center-center">

    <div class="md-layout-item">
      <img id="logo_image" src="@/assets/logo_pricey.png"/>
    </div>

    <div class="md-layout-item" id="search_product_input">
      <search-product-input />
    </div>

  </div>
</template>

<script>

// Components
import SearchProductInput from '@/components/SearchProductInput'

export default {
  components: {SearchProductInput},
  name: 'HeaderSearchResult',
  component: {
    'search-product-input': SearchProductInput
  }
}
</script>

<style>
  @import './styles/SearchResultPage.css';
</style>
