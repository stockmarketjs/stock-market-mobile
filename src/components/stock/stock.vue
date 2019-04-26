<template>
  <div>
    <mu-appbar style="width: 100%;" :color="primary">
      {{stock.name}}
      &nbsp;&nbsp;
      <small style="color: #ccc">{{stock.id}}</small>
      <mu-button flat slot="right">{{stock.market==='sh'?'沪市':'深市'}}</mu-button>
    </mu-appbar>
    <mu-appbar style="width: 100%;" :color="primary">
      {{stock.currentPrice}}
      <mu-button
        flat
        slot="right"
      >{{stock.change}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{this._.round(stock.change/stock.startPrice*100,2)}}%</mu-button>
    </mu-appbar>
    <mu-paper :z-depth="1">
      <mu-data-table hideHeader border :columns="columns" :data="list.slice(0, 2)">
        <template slot-scope="scope">
          <td>{{scope.row.name}}</td>
          <td>{{scope.row.calories}}</td>
          <td>{{scope.row.fat}}</td>
        </template>
      </mu-data-table>
    </mu-paper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      primary: "",
      columns: [
        { title: "名称", name: "name" },
        { title: "名称", name: "name" },
        { title: "名称", name: "name" }
      ],
      list: [
        {
          name: "今开: ",
          calories: "最高: ",
          fat: "总手: "
        },
        {
          name: "昨收: ",
          calories: "最低: ",
          fat: "市场: "
        }
      ],
      timer: null,
      stock: {}
    };
  },
  created() {
    this.getStock();
  },
  destroyed() {
    clearTimeout(this.timer);
  },
  beforeRouteLeave(to, from, next) {
    clearTimeout(this.timer);
    next();
  },
  methods: {
    formatColumn() {
      this.list[0].name = "今开: " + this.stock.startPrice;
      this.list[0].calories = "最高: " + this.stock.highestPrice;
      this.list[0].fat = "总手: " + this.stock.totalHand;
      this.list[1].name = "昨收: " + this.stock.endPrice;
      this.list[1].calories = "最低: " + this.stock.lowestPrice;
      this.list[1].fat = this.stock.market === "sh" ? "沪市" : "深市";
    },
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
          this.formatColumn();
          this.primary = this.stock.change >= 0 ? "primary" : "success";
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
</style>
