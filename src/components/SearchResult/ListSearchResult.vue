<template>
  <div class="md-layout md-gutter md-alignment-center-center">
    <div v-for="card in list_card">
      <search-card v-bind:key="card.id"></search-card>
    </div>
  </div>
</template>

<script>

// Components
import SearchResultCard from '@/components/SearchResult/SearchResultCard'

export default {
  name: 'ListSearchResult',
  data: function () {
    return {
      list_card: [
        {
          title: 'Single',
          subtitle: 'Sub title',
          image_link: 'image link',
          original_price: 'original price',
          old_price: 'old_price',
          id: 1
        }
      ],
      search_card: SearchResultCard
    }
  }
}
</script>

<style>

</style>
