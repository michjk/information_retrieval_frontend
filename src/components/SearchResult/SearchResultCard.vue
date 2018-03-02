<template>
  <div class="card-expansion">
    <md-card>
      <md-card-media>
        <img src="{{image_link}}" alt="People">
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

// Components

export default {
  name: 'ListSearchResult',
  props: ['title', 'subtitle', 'image_link', 'original_price', 'old_price'],
  data: function () {
    return {
      title: this.title,
      subtitle: this.subtitle,
      image_link: this.image_link,
      original_price: this.original_price,
      old_price: this.old_price
    }
  },
  watch: {
    title (value) {
      this.title = value;
    },
    subtitle (value) {
      this.subtitle = value;
    },
    image_link (value) {
      this.image_link = value;
    },
    original_price (value) {
      this.original_price = value;
    },

    old_price (value) {
      this.old_price = value;
    }
  }
}
</script>

<style lang="scss" scoped>
  .md-card {
    width: 320px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
</style>
