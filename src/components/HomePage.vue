<template>
    <v-container id="home-page-container" fluid>
        <v-layout column>
            <v-flex xs12 text-xs-center>
                <img src="@/assets/logo_pricey.png" height="125px"/>
                <div class="headline">Price comparison for e-commerce</div>
            </v-flex>
            <v-flex xs12>
                <v-layout row>
                    <v-flex xs4/>
                    <v-flex xs4>
                        <v-text-field
                            name="search-bar"
                            id="search-bar"
                            label="Enter item name"
                        ></v-text-field>
                        <div class="subheading">Product Source:</div>
                        <v-switch label="Amazon" v-model="amazon_source"/>
                        <v-switch label="Lazada" v-model="lazada_source"/>
                        <v-switch label="Shopee" v-model="shopee_source"/>
                        <v-select v-bind:items="ls" v-model="st" label="Select" autocomplete/>
                    </v-flex>
                    <v-flex xs4/>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      amazon_source: true,
      lazada_source: true,
      shopee_source: true,
      ls: ['hello', 'hey'],
      st: null
    }
  }
}
</script>
<style scoped>
#home-page-container {
    margin-top: 200px;
}
</style>
