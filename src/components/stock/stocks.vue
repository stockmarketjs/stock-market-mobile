<template>
  <div>
    <mt-cell
      @click.native="showStock(stock)"
      v-bind:key="stock.id"
      v-for="stock in stocks"
      :title="`${stock.name}`"
    >
      <span style="color: black">￥{{stock.currentPrice}}</span>
      <span style="color: red; margin-left: 10px">{{stock.changePer}}</span>
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
          this.stocks = res.data.map(v => {
            v.market = v.market === "sh" ? "沪市" : "深市";
            v.changePer =
              this._.round((v.change / v.startPrice) * 100, 2) + "%";
            return v;
          });
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
