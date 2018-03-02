<template>
  <div class="md-layout md-gutter">
      <search-result-card
        v-for="card in list_card"
        :title="card.title"
        :subtitle="card.subtitle"
        :image_link="card.image_link"
        :original_price="card.original_price"
        :new_price="card.new_price"
        v-bind:key="card.id"
      >
      </search-result-card>
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
          new_price: 'old_price',
          id: 1
        },{
          title: 'Single',
          subtitle: 'Sub title',
          image_link: 'image link',
          original_price: 'original price',
          new_price: 'old_price',
          id: 1
        },{
          title: 'Single',
          subtitle: 'Sub title',
          image_link: 'image link',
          original_price: 'original price',
          new_price: 'old_price',
          id: 1
        },{
          title: 'Single',
          subtitle: 'Sub title',
          image_link: 'image link',
          original_price: 'original price',
          new_price: 'old_price',
          id: 1
        },{
          title: 'Single',
          subtitle: 'Sub title',
          image_link: 'image link',
          original_price: 'original price',
          new_price: 'old_price',
          id: 1
        },{
          title: 'Single',
          subtitle: 'Sub title',
          image_link: 'image link',
          original_price: 'original price',
          new_price: 'old_price',
          id: 1
        },{
          title: 'Single',
          subtitle: 'Sub title',
          image_link: 'image link',
          original_price: 'original price',
          new_price: 'old_price',
          id: 1
        },{
          title: 'Single',
          subtitle: 'Sub title',
          image_link: 'image link',
          original_price: 'original price',
          new_price: 'old_price',
          id: 1
        },{
          title: 'Single',
          subtitle: 'Sub title',
          image_link: 'image link',
          original_price: 'original price',
          new_price: 'old_price',
          id: 1
        },{
          title: 'Single',
          subtitle: 'Sub title',
          image_link: 'image link',
          original_price: 'original price',
          new_price: 'old_price',
          id: 1
        },{
          title: 'Single',
          subtitle: 'Sub title',
          image_link: 'image link',
          original_price: 'original price',
          new_price: 'old_price',
          id: 1
        },{
          title: 'Single',
          subtitle: 'Sub title',
          image_link: 'image link',
          original_price: 'original price',
          new_price: 'old_price',
          id: 1
        },{
          title: 'Single',
          subtitle: 'Sub title',
          image_link: 'image link',
          original_price: 'original price',
          new_price: 'old_price',
          id: 1
        }
      ]
    }
  },
  components: {SearchResultCard},
  component: {
    'search-result-card': SearchResultCard
  }
}
</script>

<style>

</style>
