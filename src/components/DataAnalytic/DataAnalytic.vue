<template>
    <div>
      <md-app>
        <md-app-toolbar class="md-primary">
          <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
            <md-icon>menu</md-icon>
          </md-button>
          <span class="md-title">Pricey Dashboard</span>
        </md-app-toolbar>
      </md-app>
      <div>
          <md-card>
              <div id="card_div">
                <div>
                  <bubble-chart :datas="datas"
                                :width="800"
                                :height="600"
                  />
                </div>
              </div>
          </md-card>
      </div>
    </div>
</template>

<script>

// Components
import LineChart from './LineChart.vue'
import PieChart from './PieChart.vue'
import BubbleChart from './BubbleChart'

// Api related stuff
import {getItemsSemantic} from '@/constants'
import axios from 'axios'

// utils
import {getRandomHex} from '@/components/commons/Utils'

export default {
  name: 'DataAnalytic',
  components: {
    BubbleChart,
    PieChart,
    'line-chart': LineChart,
    'pie-chart': PieChart,
    'bubble-chart': BubbleChart
  },
  data () {
    return {
      menuVisible: false,
      labels: [],
      dataToRender: [],
      datas: {}
    }
  },
  created () {
    // call the initial API
    this.callApiForGraph()
  },

  methods: {

    callApiForGraph: function () {
      axios.get(getItemsSemantic)
        .then((response) => {

          for (let key in response.data) {
            let positive = response.data[key]['positive']
            let negative = response.data[key]['negative']
            let neutral = response.data[key]['neutral']

            let semanticComment = 0

            if (positive > negative && positive > neutral) semanticComment = 1
            else if (negative > neutral && negative > positive) semanticComment = -1

            let total = positive + negative + neutral

            let rating = response.data[key]['rating'] * 1.0 / total

            this.dataToRender.push(
              {
                label: key,
                backgroundColor: getRandomHex(),
                pointBackgroundColor: 'white',
                borderWidth: 1,
                pointBorderColor: getRandomHex(),
                data: [
                  {
                    x: 30,
                    y: 60,
                    r: 20
                  }
                ]
              }
            )
            this.labels.push(key)

            this.datas.labels = this.labels
            this.datas.datasets = this.dataToRender
          }
        })
        .catch((err) => console.log('err', err))
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
