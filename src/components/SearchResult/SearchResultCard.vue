<template>
    <!-- STUPID VUE CANNOT READ THE REFERENCES FROM DATA, IT LOOKS LIKE THEY SAVED THE OLD POINTER -->
    <md-card @click.native="clickCard" v-bind:class="[this.$store.getters.getFindSimilarState && !this.chooseAsSimilarState ? 'overlay_white card_background' : 'overlay_normal card_background']">
				<img v-bind:src="shopImage" class="shop_logo"/>
      <md-card-media class="div_image_card">
        <img v-bind:src="imageLink" alt="People" class="image_card" v-on:click="clickCard"/>
      </md-card-media>

      <md-card-header>
        <!--<div class="md-title">{{product_name}}</div>-->
        <div class="md-subhead" v-on:click="clickCard">{{filterProductName(productName)}}</div>
      </md-card-header>

      <md-card-content>
        <template v-if="(originalPrice==='-1'&&currentPrice==='-1')">
          <span id='currPrice'>Product not available</span>
        </template>
        <template v-else-if="currentPrice==='-1'">
          <span id='currPrice'>{{originalPrice}}</span>
        </template>
        <template v-else-if="originalPrice==='-1'">
          <span id='currPrice'>{{currentPrice}}</span>
        </template>
        <template v-else-if="currentPrice.length < originalPrice.length">
          <span id='currPrice'>{{currentPrice}}</span>   <span id='oriPrice'><strike> {{originalPrice}}</strike></span>
        </template>
        <template v-else-if="originalPrice.length < currentPrice.length">
          <span id='currPrice'>{{originalPrice}}</span>   <span id='oriPrice'><strike> {{currentPrice}}</strike></span>
        </template>
        <template v-else>
          <template v-if="currentPrice < originalPrice">
            <span id='currPrice'>{{currentPrice}}</span>   <span id='oriPrice'><strike> {{originalPrice}}</strike></span>
          </template>
          <template v-else-if="originalPrice < currentPrice">
            <span id='currPrice'>{{originalPrice}}</span>   <span id='oriPrice'><strike> {{currentPrice}}</strike></span>
          </template>
          <template v-else>
            <span id='currPrice'>{{originalPrice}}</span>
          </template>
        </template>
      </md-card-content>
    </md-card>
</template>
<script>

import router from '../../router'
import {filterProductName} from './../commons/Utils'

export default {
  name: 'SearchResultCard',
  props: ['productName', 'productId', 'productLink', 'originalPrice', 'currentPrice',
    'productDescription', 'imageLink', 'shop', 'shopImage'
  ],
  data () {
    return {
      chooseAsSimilarState: false
    }
  },
  computed: {
    findSimilarState () {
      return this.$store.getters.getFindSimilarState
    }
  },
  methods: {
    clickCard: function (event) {
      // do not route when it is on the findSimilarState
      if (this.$store.getters.getFindSimilarState) {
        this.chooseAsSimilarState = !this.chooseAsSimilarState

        if (this.chooseAsSimilarState) {
          this.$store.commit('pushToListSimilarResult', this.filterProductName(this.productName))
        } else {
          this.$store.commit('deleteFromListSimilarState', this.filterProductName(this.productName))
        }
      } else {
        router.push(`product_description?product_id=${this.productId}&shop=${this.shop}`)
      }
    },
    filterProductName: filterProductName
  },
  watch: {
    findSimilarState (oldValue, newValue) {
      // when toggling happened always restart the state of currentChooseAsSimilarState
      this.chooseAsSimilarState = false

      // reset the list in the store
      this.$store.commit('resetListSimilarResult')
    }
  }
}

</script>

<style>
  @import './styles/SearchResultPage.css';
	.shop_logo {
		position: absolute;
		bottom: 2rem;
		right: 1rem;
		z-index:1;
		width: 50px !important;
		height: 40px !important;
		object-fit: contain;
	}
	.card_background {
		transition: ease-in-out 0.2s;
		height: 100%;
	}
	.card_background:hover {
		transition: ease-in-out 0.2s;
		transform: translate(0, -5px);
	}
	.card_background:active {
		background-color: rgba(200, 200, 200, 0.3);
	}
</style>
