<template>
  <mu-container>
    <mu-tabs :value.sync="active" color="#ef5350" indicator-color="#f8bbd0" full-width>
      <mu-tab>每日热点</mu-tab>
      <mu-tab>市场分析</mu-tab>
      <mu-tab>支援我们</mu-tab>
    </mu-tabs>
    <div class="demo-text" v-if="active === 0">
      <News/>
    </div>
    <div class="demo-text" v-if="active === 1">
      <TotalSummary/>
    </div>
    <div class="demo-text" v-if="active === 2">
      <Pay/>
    </div>
  </mu-container>
  <!-- <mt-navbar v-model="active">
      <mt-tab-item id="tab1">欢迎</mt-tab-item>
      <mt-tab-item id="tab2">人数统计</mt-tab-item>
      <mt-tab-item id="tab3">现金排行榜</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="active" swipeable>
      <mt-tab-container-item id="tab1">
        欢迎
      </mt-tab-container-item>
      <mt-tab-container-item id="tab2">
        建设中
      </mt-tab-container-item>
      <mt-tab-container-item id="tab3">
        <RankSummary/>
      </mt-tab-container-item>
  </mt-tab-container>-->
</template>

<script>
// @ is an alias to /src
// import RankSummary from "@/components/summary/rank_summary.vue";
import News from "@/components/news.vue";
import TotalSummary from "@/components/summary/total_summary.vue";
import Pay from "@/components/pay/pay.vue";

export default {
  name: "home",
  components: {
    // RankSummary,
    News,
    TotalSummary,
    Pay,
  },
  data() {
    return {
      active: 0
    };
  }
};
</script>

<style>
</style>