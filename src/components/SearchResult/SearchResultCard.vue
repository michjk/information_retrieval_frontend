<template>
  <div  class="md-layout-item card_layout">
    <md-card>
      <md-card-media>
        <img v-bind:src="image_test" alt="People" width="100px" height="100px" />
      </md-card-media>

      <md-card-header>
        <div class="md-title">{{title}}</div>
        <div class="md-subhead">{{subtitle}}</div>
      </md-card-header>

      <md-card-content>
        {{original_price}} {{old_price}}
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
export default {
  name: 'SearchResultCard',
  props: ['title', 'subtitle', 'image_link', 'original_price', 'old_price'],
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
