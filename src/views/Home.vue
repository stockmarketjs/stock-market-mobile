<template>
  <div>
    <mt-navbar v-model="active">
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
    </mt-tab-container>
  </div>
</template>

<script>
// @ is an alias to /src
import RankSummary from "@/components/summary/rank_summary.vue";

export default {
  name: "home",
  components: {
    RankSummary
  },
  data() {
    return {
      active: "tab1"
    };
  }
};
</script>
