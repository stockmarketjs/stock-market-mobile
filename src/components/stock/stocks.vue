<template>
  <div>
    <mt-cell
      @click.native="showStock(stock)"
      v-bind:key="stock.id"
      v-for="stock in stocks"
      :title="`${stock.name}`"
    >
      <span style="color: red">￥{{stock.currentPrice}}</span>
      <span style="color: red">{{this._.round(stock.change/stock.startPrice*100,2)}}%</span>
    </mt-cell>
  </div>
</template>

<script>
export default {
  created() {
    this.getStocks();
  },
  destroyed() {
    clearTimeout(this.timer);
  },
  methods: {
    showStock(stock) {
      this.$router.push(`/stock/${stock.id}`);
    },
    getStocks() {
      this.axios
        .get("api/stocks")
        .then(res => {
          this.stocks = res.data;
          this.timer = setTimeout(() => {
            this.getStocks();
          }, 5000);
        })
        .catch(e => {
          this.timer = setTimeout(() => {
            this.getStocks();
          }, 10000);
        });
    }
  },
  data() {
    return {
      timer: null,
      stocks: []
    };
  }
};
</script>

<style scoped>
</style>
