<template>
  <div>
  </div>
</template>

<script>
export default {
  name: 'SearchResultCard',
  data: function () {
    return {
      title: this.title,
      subtitle: this.subtitle,
      image_link: this.image_link,
      original_price: this.original_price,
      old_price: this.old_price
    }
  },
  created: function () {
    console.log('title', this.title)
  }
}

</script>
