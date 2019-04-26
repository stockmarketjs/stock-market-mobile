<template>
  <div>
    <mu-paper :z-depth="1">
      <mu-data-table hideHeader :columns="columns" :data="soldShifts">
        <template slot-scope="scope">
          <td>卖{{scope.row.shift}}</td>
          <td>￥{{scope.row.price}}</td>
          <td>{{scope.row.hand}}</td>
        </template>
      </mu-data-table>
    </mu-paper>
    <mu-paper :z-depth="1">
      <mu-data-table hideHeader :columns="columns" :data="buyShifts">
        <template slot-scope="scope">
          <td>买{{scope.row.shift}}</td>
          <td>￥{{scope.row.price}}</td>
          <td>{{scope.row.hand}}</td>
        </template>
      </mu-data-table>
    </mu-paper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      primary: "primary",
      columns: [
        { title: "名称", name: "shift" },
        { title: "名称", name: "price" },
        { title: "名称", name: "hand" }
      ],
      timer1: null,
      timer2: null,
      buyShifts: [],
      soldShifts: []
    };
  },
  created() {
    this.findAllBuyShift();
    this.findAllSoldShift();
  },
  destroyed() {
    clearTimeout(this.timer1);
    clearTimeout(this.timer2);
  },
  beforeRouteLeave(to, from, next) {
    clearTimeout(this.timer1);
    clearTimeout(this.timer2);
    next();
  },
  methods: {
    setClass(change) {
      return change >= 0 ? "red" : "green";
    },
    buyShiftFormat: function(row, column) {
      return `买${row.shift}`;
    },
    soldShiftFormat: function(row, column) {
      return `卖${row.shift}`;
    },
    handFormat: function(row, column) {
      return `${row.hand}手`;
    },
    priceFormat: function(row, column) {
      return `￥${row.price}`;
    },
    findAllBuyShift() {
      this.axios
        .get(`api/stocks/${this.$route.params.stockId}/orders/buy_shifts`)
        .then(res => {
          this.buyShifts = res.data;
          this.timer1 = setTimeout(() => {
            this.findAllBuyShift();
          }, 5000);
        })
        .catch(e => {
          this.timer1 = setTimeout(() => {
            this.findAllBuyShift();
          }, 10000);
        });
    },
    findAllSoldShift() {
      this.axios
        .get(`api/stocks/${this.$route.params.stockId}/orders/sold_shifts`)
        .then(res => {
          this.soldShifts = res.data.reverse();
          this.timer2 = setTimeout(() => {
            this.findAllSoldShift();
          }, 5000);
        })
        .catch(e => {
          this.timer2 = setTimeout(() => {
            this.findAllSoldShift();
          }, 10000);
        });
    }
  }
};
</script>

<style scoped>
.red {
  color: red;
}
.green {
  color: green;
}
</style>
