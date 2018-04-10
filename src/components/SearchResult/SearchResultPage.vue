<template>
  <!-- Header -->
  <div id="list_item_div">
    <header-search-result />

    <div class="md-layout">

      <div class="md-layout-item md-size-15">
        <left-drawer>
        </left-drawer>
      </div>

      <div class="item_wrapper md-layout-item md-size-85">
        <list-search-result></list-search-result>
      </div>
    </div>
  </div>
</template>

<script>

// import axios from 'axios'
// import {searchProductApiUrl} from '@/constants'
// import {styles} from './styles/Search'

// component
import HeaderSearchResult from '@/components/SearchResult/HeaderSearchResult'
import ListSearchResult from '@/components/SearchResult/ListSearchResult'
import LeftDrawer from '@/components/SearchResult/LeftDrawer'

export default {
  name: 'SearchResultPage',
  components: {
    'header-search-result': HeaderSearchResult,
    'list-search-result': ListSearchResult,
    'left-drawer': LeftDrawer
  }
}
</script>

<style scoped>
  #list_item_div {
    padding-left: 8rem;
    padding-right: 8rem;
    padding-top: 4rem;
  }
	
	.item_wrapper {
		padding: 0px !important;
	}
</style>
