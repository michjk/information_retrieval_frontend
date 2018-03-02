<template>
  <!-- Header -->
  <div id="list_item_div">
    <header-search-result />

    <list-search-result></list-search-result>

  </div>
</template>

<script>

// import axios from 'axios'
// import {searchProductApiUrl} from '@/constants'
// import {styles} from './styles/Search'

// component
import HeaderSearchResult from '@/components/SearchResult/HeaderSearchResult'
import ListSearchResult from '@/components/SearchResult/ListSearchResult'

export default {
  name: 'SearchResultPage',
  components: {
    'header-search-result': HeaderSearchResult,
    'list-search-result': ListSearchResult
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
