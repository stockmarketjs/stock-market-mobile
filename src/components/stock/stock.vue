<template>
  <div>
    <mt-cell class="red block" :title="stock.name">
        <span style="color: #ccc">{{stock.market==='sh'?'沪市':'深市'}}</span>
    </mt-cell>
    <mt-cell title="当前价">
        <span style="color: #000">{{stock.currentPrice}}</span>
    </mt-cell>
    <mt-cell title="涨幅">
        <span style="color: #000">{{stock.change}}</span>
    </mt-cell>
    <mt-cell title="涨幅%">
        <span style="color: #000">{{this._.round(stock.change/stock.startPrice*100,2)}}%</span>
    </mt-cell>
    <mt-cell title="总手">
        <span style="color: #000">{{stock.totalHand}}</span>
    </mt-cell>
    <mt-cell title="开盘价">
        <span style="color: #000">{{stock.startPrice}}</span>
    </mt-cell>
    <mt-cell title="收盘价">
        <span style="color: #000">{{stock.endPrice}}</span>
    </mt-cell>
    <mt-cell title="最高价">
        <span style="color: #000">{{stock.highestPrice}}</span>
    </mt-cell>
    <mt-cell title="最低价">
        <span style="color: #000">{{stock.lowestPrice}}</span>
    </mt-cell>
    <mt-cell title="总股本">
        <span style="color: #000">{{stock.generalCapital}}</span>
    </mt-cell>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timer: null,
      stock: {
        stockPrice: {},
        stockCapital: {}
      }
    };
  },
  created() {
    this.getStock();
  },
  destroyed() {
    clearTimeout(this.timer);
  },
  methods: {
    backStocks() {
      const redirect = decodeURIComponent(
        this.$route.query.redirect_url || "/"
      );
      this.$router.push(redirect);
    },
    getStock() {
      this.axios
        .get(`api/stocks/${this.$route.params.stockId}`)
        .then(res => {
          this.stock = res.data;
          this.timer = setTimeout(() => {
            this.getStock();
          }, 5000);
        })
        .catch(e => {
          this.timer = setTimeout(() => {
            this.getStock();
          }, 10000);
        });
    }
  }
};
</script>

<style scoped>
.block {
  font-size: large !important;
  color: white !important;
}
</style>
