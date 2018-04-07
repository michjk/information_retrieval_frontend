<template>
    <md-app>
      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">Pricey Dashboard</span>
      </md-app-toolbar>

      <md-app-content>
        <div id="main_div">
          <md-card>
            <md-card-content
            >
                <div id="card_div">
                  <div>
                    <pie-chart/>
                  </div>
                </div>
            </md-card-content>
          </md-card>
        </div>
      </md-app-content>
    </md-app>
</template>

<script>

// Components
import LineChart from './LineChart.vue'
import PieChart from './PieChart.vue'

export default {
  name: 'DataAnalytic',
  components: {
    PieChart,
    'line-chart': LineChart,
    'pie-chart': PieChart
  },
  data () {
    return {
      menuVisible: false
    }
  }
}

</script>

<style>

#card_div {
  display: flex;
  justify-content: center;
}

</style>
