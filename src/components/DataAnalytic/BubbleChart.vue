<script>
import { Bubble } from 'vue-chartjs'

export default {
  extends: Bubble,
  props: ['datas', 'options'],
  mounted () {
    this.renderChart(
      {
        //Data to be represented on x-axis
        labels: ['Shopee', 'Lazada', 'Amazon'],
        datasets: [
          {
            label: 'Shopee Data',
            backgroundColor: '#f1582c',
            pointBackgroundColor: 'white',
            borderWidth: 1,
            pointBorderColor: '#249EBF',
            data: [
              {
                x: 10,
                y: 2.94,
                r: 11.5
              },
              {
                x: 0,
                y: 2.15,
                r: 0.394
              },
              {
                x: 5,
                y: 0.38,
                r: 38
              }

            ]
          },
          {
            label: 'Lazada Data',
            backgroundColor: '#264a5f',
            pointBackgroundColor: 'white',
            borderWidth: 1,
            pointBorderColor: '#249EBF',
            data: [
              {
                x: 10,
                y: 4.62,
                r: 23.74
              },
              {
                x: 0,
                y: 4.04,
                r: 0.9
              },
              {
                x: 5,
                y: 1.82,
                r: 25.2
              }
            ]
          },
          {
            label: 'Amazon Data',
            backgroundColor: '#ff9900',
            pointBackgroundColor: 'white',
            borderWidth: 1,
            pointBorderColor: '#249EBF',
            data: [
              {
                x: 10,
                y: 4.30,
                r: 46.4
              },
              {
                x: 0,
                y: 3.30,
                r: 0.7
              },
              {
                x: 5,
                y: 4.09,
                r: 2.7
              }
            ]
          }
        ]
      }
      ,  {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: false,
              suggestedMin: 0
            },
            gridLines: {
              display: true
            }
          }],
          xAxes: [ {
            ticks: {
              beginAtZero: false,
              suggestedMin: -5,
              suggestedMax: 15
            },
            gridLines: {
              display: false
            }
          }]
        },
        legend: {
          display: true
        },
        responsive: true,
        maintainAspectRatio: false
    }
    )
  },
  watch: {
    datas: {
      function () {
        this._chart.destroy()
        this.renderChart(this.datas, {responsive: true, maintainAspectRatio: false})
      }
    }
  }
}

</script>

<style>
</style>
