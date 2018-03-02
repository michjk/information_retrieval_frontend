<template>
  <!-- Header -->
  <div id="list_item_div">
    <header-search-result />

    <div class="md-layout">

      <div class="md-layout-item md-size-20">
        <left-drawer>
        </left-drawer>
      </div>

      <div class="md-layout-item md-size-80">
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
    padding-left: 4rem;
    padding-right: 4rem;
    padding-top: 2rem;
  }
</style>
