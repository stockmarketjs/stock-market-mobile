<template>
  <div>
    <RankSummary/>
  </div>
</template>

<script>
// @ is an alias to /src
import RankSummary from "@/components/summary/rank_summary.vue";

export default {
  name: "home",
  components: {
    RankSummary
  }
};
</script>
