<template>
  <ve-candle :data="chartData" :settings="chartSettings" :loading="loading" :extend="chartExtend"/>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      timer: null,
      chartExtend: {
        series(v) {
          v.forEach(i => {
            i.smooth = true;
            i.showSymbol = false;
          });
          return v;
        }
      },
      chartSettings: {
        showDataZoom: true,
        scale: [true, true],
        showMA: false,
        showVol: true
      },
      chartData: {
        columns: [
          "date",
          "startPrice",
          "endPrice",
          "lowestPrice",
          "highestPrice"
        ],
        rows: []
      }
    };
  },
  created() {
    this.loading = true;
    this.getStockCandles();
  },
  destroyed() {
    clearTimeout(this.timer);
  },
  beforeRouteLeave(to, from, next) {
    clearTimeout(this.timer);
    next();
  },
  methods: {
    getStockCandles() {
      this.axios
        .get(`api/stocks/${this.$route.params.stockId}/histories`)
        .then(res => {
          this.chartData.rows = res.data;
          this.loading = false;
          this.timer = setTimeout(() => {
            this.getStockCandles();
          }, 5000);
        })
        .catch(e => {
          this.timer = setTimeout(() => {
            this.getStockCandles();
          }, 10000);
        });
    }
  }
};
</script>

<style scoped>
</style>
