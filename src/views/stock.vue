<template>
  <div>
    <Stock/>
    <StockShfit/>
  </div>
</template>

<script>
// @ is an alias to /src
import Stock from "@/components/stock/stock.vue";
import StockShfit from "@/components/stock/stock_shift.vue";

export default {
  name: "stock",
  components: {
    Stock,
    StockShfit
  }
};
</script>
