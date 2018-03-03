<template>
  <div  class="md-layout-item card_layout">
    <md-card>
      <md-card-media class="div_image_card">
        <img v-bind:src="imageLink" alt="People" class="image_card"/>
      </md-card-media>

      <md-card-header>
        <!--<div class="md-title">{{product_name}}</div>-->
        <div class="md-subhead">{{productName}}</div>
      </md-card-header>

      <md-card-content>
        {{originalPrice}} {{currentPrice}}
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
export default {
  name: 'SearchResultCard',
  props: ['productName', 'productId', 'productLink', 'originalPrice', 'currentPrice',
    'productDescription', 'imageLink'
  ],
  data: function () {
    return {
      image_test: 'https://cfshopeecommy-a.akamaihd.net/file/a6413303a22ad12ed670e62689cacbd9'
    }
  }
}

</script>

<style>
  @import './styles/SearchResultPage.css';
</style>
