<template>
  <div>
    <mt-cell v-bind:key="stock.id" v-for="stock in stocks" :title="`${stock.name}`">
      <span style="color: red">￥{{stock.currentPrice}}</span>
    </mt-cell>
  </div>
  <!-- <el-table :data="stocks" stripe @row-click="showStock" style="width: 100%">
    <el-table-column prop="name" label="股票名称" width="180"/>
    <el-table-column prop="currentPrice" label="当前价"/>
    <el-table-column prop="change" label="涨幅"/>
    <el-table-column prop="changePer" label="涨幅"/>
    <el-table-column prop="market" label="市场"/>
  </el-table>-->
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
