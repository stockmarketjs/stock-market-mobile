<template>
  <div>
    <mt-cell title="现金排行榜" value="现金"></mt-cell>
    <mt-cell v-bind:key="item.name" v-for="item in summary" :title="`用户ID: ${item.name}`">
      <span style="color: red">￥{{item.value}}</span>
    </mt-cell>
  </div>
</template>

<script>
export default {
  data() {
    return {
      summary: []
    };
  },
  async mounted() {
    await this.getMarketSummary();
  },
  methods: {
    async getMarketSummary() {
      const { data } = await this.axios.get(`api/stock_summaries/rank`);
      this.summary = data;
    }
  }
};
</script>


<style scoped>
</style>
