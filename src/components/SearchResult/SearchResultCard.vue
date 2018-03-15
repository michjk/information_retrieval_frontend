<template>
    <md-card>
      <md-card-media class="div_image_card">
        <img v-bind:src="imageLink" alt="People" class="image_card" v-on:click="clickCard"/>
      </md-card-media>

      <md-card-header>
        <!--<div class="md-title">{{product_name}}</div>-->
        <div class="md-subhead" v-on:click="clickCard">{{filterProductName(productName)}}</div>
      </md-card-header>

      <md-card-content>
        {{originalPrice}} {{currentPrice}}
      </md-card-content>
    </md-card>
</template>

<script>

import router from '../../router'
import {filterProductName} from './../commons/Utils'

export default {
  name: 'SearchResultCard',
  props: ['productName', 'productId', 'productLink', 'originalPrice', 'currentPrice',
    'productDescription', 'imageLink', 'shop'
  ],
  data: function () {
    return {
      image_test: 'https://cfshopeecommy-a.akamaihd.net/file/a6413303a22ad12ed670e62689cacbd9'
    }
  },
  methods: {
    clickCard: function (event) {
      router.push(`product_description?product_id=${this.productId}&shop=${this.shop}`)
    },
    filterProductName: filterProductName
  }
}

</script>

<style>
  @import './styles/SearchResultPage.css';
</style>
