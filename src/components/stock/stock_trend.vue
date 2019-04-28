<template>
  <div>
    <ve-line :data="chartData" :settings="chartSettings" :extend="chartExtend" :loading="loading"/>
  </div>
</template>

<script>
import "v-charts/lib/style.css";
import echarts from "echarts";
export default {
  data() {
    return {
      timer: null,
      chartExtend: {
        series: {
          itemStyle: {
            normal: {
              color: "#64b5f6",
              lineStyle: {
                width: 1
              }
            }
          },
          smooth: 0,
          showSymbol: false,
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "rgba(100,181,246,0.6)" },
              { offset: 1, color: "rgba(255,255,255,0.2)" }
            ])
          }
        }
      },
      chartData: {
        columns: ["minute", "price"],
        rows: []
      },
      loading: true,
      chartSettings: {
        scale: [true, true],
        // area: true,
        metrics: ["price"],
        dimension: ["minute"],
        labelMap: {
          minute: "时间",
          price: "价格"
        }
      }
    };
  },
  created() {
    this.loading = true;
    this.getStockTrends();
  },
  destroyed() {
    clearTimeout(this.timer);
  },
  beforeRouteLeave(to, from, next) {
    clearTimeout(this.timer);
    next();
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
            };
          });
          this.loading = false;
          this.timer = setTimeout(() => {
            this.getStockTrends();
          }, 5000);
        })
        .catch(e => {
          this.timer = setTimeout(() => {
            this.getStockTrends();
          }, 10000);
        });
    }
  }
};
</script>

<style scoped>
</style>
