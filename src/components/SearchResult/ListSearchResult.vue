<template>
  <div class="md-layout md-gutter">
      <search-result-card
        v-for="card in listCard"
        :productName="card.product_name"
        :productId="card.product_id"
        :imageLink="card.image_link"
        :originalPrice="card.original_price"
        :currentPrice="card.current_price"
        :productDescription="card.description"
        v-bind:key="card.id"
      >
      </search-result-card>
  </div>
</template>

<script>

// Components
import SearchResultCard from '@/components/SearchResult/SearchResultCard'

// utils
import {searchListProductApiUrl} from '@/constants'
import axios from 'axios'
import { getParameterByName, checkURL } from './../commons/Utils'
import {VuePaginator} from 'vuejs-paginator'

export default {
  name: 'ListSearchResult',
  data: function () {
    return {
      PRODUCT_NAME: 'product_name',
      OFFSET: 'offset',
      LIMIT: 'limit',
      listCard: [
        {
          productName: 'Single',
          productId: 'Sub title',
          imageLink: 'image link',
          originalPrice: 'original price',
          currentPrice: 'old_price',
          id: 1,
          description: 'description'
        }
      ]
    }
  },
  created () {
    // call the API
    const productName = getParameterByName(this.PRODUCT_NAME)
    const offset = getParameterByName(this.OFFSET)
    const limit = getParameterByName(this.LIMIT)
    let thisApp = this

    thisApp.listCard = []

    axios.get(searchListProductApiUrl + '?' + this.PRODUCT_NAME + '=' +
      productName + '&' + this.OFFSET + '=' + offset + '&' + this.LIMIT + '=' + limit)
      .then((response) => {

        response.data.list_product.list_product.forEach( (product) => {
          if (checkURL(product.image_link)) {
            thisApp.listCard.push(product)
          }

        })

      }).catch((err) => {console.log('err', err)})
  },
  components: {
    'search-result-card': SearchResultCard
  }
}
</script>

<style>

</style>
