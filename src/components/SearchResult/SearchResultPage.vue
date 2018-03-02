<template>
  <div>
    <header-search-result />
  </div>
</template>

<script>

// import axios from 'axios'
// import {searchProductApiUrl} from '@/constants'
// import {styles} from './styles/Search'

// component
import HeaderSearchResult from '@/components/SearchResult/HeaderSearchResult'

export default {
  name: 'SearchResultPage',
  components: {
    'header-search-result': HeaderSearchResult
  }

}
</script>

<style scoped>
</style>
