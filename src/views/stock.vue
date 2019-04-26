<template>
  <div>
    <Stock/>
    <mu-tabs :value.sync="active2" inverse color="black" indicator-color="primary" full-width>
      <mu-tab>实时</mu-tab>
      <mu-tab>日线</mu-tab>
    </mu-tabs>
    <div class="demo-text" v-if="active2 === 0">
      <StockTrend/>
    </div>
    <div class="demo-text" v-if="active2 === 1">
      <StockCandle/>
    </div>
    <StockShfit/>
  </div>
</template>

<script>
// @ is an alias to /src
import Stock from "@/components/stock/stock.vue";
import StockShfit from "@/components/stock/stock_shift.vue";
import StockTrend from "@/components/stock/stock_trend.vue";
import StockCandle from "@/components/stock/stock_candle.vue";

export default {
  name: "stock",
  components: {
    Stock,
    StockShfit,
    StockTrend,
    StockCandle
  },
  data() {
    return {
      active2: 0
    };
  }
};
</script>
