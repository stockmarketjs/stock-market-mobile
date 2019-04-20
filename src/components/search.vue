<template>
  <div>
    <mt-search cancel-text="取消" placeholder="搜索" v-model="searchValue">
      <mt-cell v-bind:key="stock.id" v-for="stock in stocks" :title="stock.name" :value="stock.id"></mt-cell>
    </mt-search>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchValue: "",
      stocks: []
    };
  },
  mounted(){
    this.getStocks();
  },
  methods: {
    getStocks() {
      this.axios.get("api/stocks").then(res => {
        this.stocks = res.data.map(v => {
          v.market = v.market === "sh" ? "沪市" : "深市";
          v.changePer = this._.round((v.change / v.startPrice) * 100, 2) + "%";
          return v;
        });
      });
    }
  }
};
</script>


<style scoped>
</style>
