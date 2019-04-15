<template>
  <div>
    <mt-cell v-bind:key="row.shift" v-for="row in soldShifts" :title="`卖${row.shift}`">
      <span style="color: red">￥{{row.price}}</span>
      <span style="color: black">&nbsp;&nbsp;{{row.hand}}手</span>
    </mt-cell>
    <mt-cell v-bind:key="row.shift" v-for="row in buyShifts" :title="`买${row.shift}`">
      <span style="color: red">￥{{row.price}}</span>
      <span style="color: black">&nbsp;&nbsp;{{row.hand}}手</span>
    </mt-cell>
    <!-- <el-table :data="soldShifts">
      <el-table-column prop="shift" :formatter="soldShiftFormat"></el-table-column>
      <el-table-column prop="price" :formatter="priceFormat"></el-table-column>
      <el-table-column prop="hand" :formatter="handFormat"></el-table-column>
    </el-table>
    <el-table :data="buyShifts">
      <el-table-column prop="shift" :formatter="buyShiftFormat"></el-table-column>
      <el-table-column prop="price" :formatter="priceFormat"></el-table-column>
      <el-table-column prop="hand" :formatter="handFormat"></el-table-column>
    </el-table> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
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
  methods: {
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
</style>
