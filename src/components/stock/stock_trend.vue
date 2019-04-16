<template>
  <div>
    <ve-line :data="chartData" :settings="chartSettings" :extend="chartExtend" :loading="loading"/>
  </div>
</template>

<script>
import 'v-charts/lib/style.css'
export default {
  data() {
    return {
      timer: null,
      chartExtend: {
        series(v) {
          v.forEach(i => {
            i.smooth = true
            i.showSymbol = false
          })
          return v
        }
      },
      chartData: {
        columns: ['minute', 'price'],
        rows: []
      },
      loading: true,
      chartSettings: {
        scale: [true, true],
        // area: true,
        metrics: ['price'],
        dimension: ['minute'],
        labelMap: {
          minute: '时间',
          price: '价格'
        }
      }
    }
  },
  created() {
    this.loading = true
    this.getStockTrends()
  },
  destroyed() {
    clearTimeout(this.timer)
  },
  methods: {
    getStockTrends() {
      this.axios
        .get(`api/stocks/${this.$route.params.stockId}/orders`)
        .then(res => {
          this.chartData.rows = res.data.minutePrices.map(item => {
            return {
              minute: item[0],
              price: item[1]
            }
          })
          this.loading = false
          this.timer = setTimeout(() => {
            this.getStockTrends()
          }, 5000)
        })
        .catch(e => {
          this.timer = setTimeout(() => {
            this.getStockTrends()
          }, 10000)
        })
    }
  }
}
</script>

<style scoped>
</style>
