<template>
  <div>
    <Stock/>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">实时</mt-tab-item>
      <mt-tab-item id="2">日线</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <StockTrend v-if="'1' === selected"/>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <StockCandle v-if="'2' === selected"/>
      </mt-tab-container-item>
    </mt-tab-container>
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
      selected: "1"
    };
  }
};
</script>
