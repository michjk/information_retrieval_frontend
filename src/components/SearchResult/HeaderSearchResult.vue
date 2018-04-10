<template>
  <div class="header md-layout md-alignment-center-center">

    <div class="md-layout-item md-size-15 md-alignment-top-right">
      <img v-on:click="gotoHomePage" id="logo_image" src="@/assets/logo_pricey.png"/>
    </div>

    <div class="md-layout-item md-size-85" id="search_product_input">
      <search-product-input />
    </div>

  </div>
</template>

<script>

// Components
import SearchProductInput from './SearchProductInput'
import router from '../../router'

export default {
  components: {SearchProductInput},
  name: 'HeaderSearchResult',
  component: {
    'search-product-input': SearchProductInput
  },
	methods: {
		gotoHomePage: function() {
			router.push('/')
		}
	}
}
</script>

<style>
  @import './styles/SearchResultPage.css';
	.header {
		margin-bottom: 1rem;
	}
</style>
