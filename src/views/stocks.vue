<template>
  <div>
    <Stocks/>
  </div>
</template>

<script>
// @ is an alias to /src
import Stocks from "@/components/stock/stocks.vue";

export default {
  name: "stocks",
  components: {
    Stocks
  }
};
</script>
