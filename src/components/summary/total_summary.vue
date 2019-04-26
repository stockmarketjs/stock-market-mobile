<template>
  <mu-paper :z-depth="1" class="demo-list-wrap">
    <mu-list>
      <mu-list-item button :ripple="false">
        <mu-list-item-action>
          <mu-icon value="local_grocery_store"></mu-icon>
        </mu-list-item-action>
        <mu-list-item-title>现金分析</mu-list-item-title>
      </mu-list-item>
      <mu-list-item button :ripple="false">
        <mu-list-item-action>
          <mu-icon value="person"></mu-icon>
        </mu-list-item-action>
        <mu-list-item-title>股民人数分析</mu-list-item-title>
      </mu-list-item>
      <mu-list-item button :ripple="false">
        <mu-list-item-action>
          <mu-icon value="message"></mu-icon>
        </mu-list-item-action>
        <mu-list-item-title>消息面分析</mu-list-item-title>
      </mu-list-item>
      <mu-list-item button :ripple="false">
        <mu-list-item-action>
          <mu-icon value="card_travel"></mu-icon>
        </mu-list-item-action>
        <mu-list-item-title>政策面分析</mu-list-item-title>
      </mu-list-item>
    </mu-list>
    <mu-list textline="three-line">
      <mu-sub-header>热评</mu-sub-header>
      <mu-list-item avatar :ripple="false" button>
        <mu-list-item-action>
          <mu-avatar>
            <img src="https://muse-ui.org/img/avatar2.eff5aba4.jpg">
          </mu-avatar>
        </mu-list-item-action>
        <mu-list-item-content>
          <mu-list-item-title>感觉这波股市会大涨?</mu-list-item-title>
          <mu-list-item-sub-title>
            <span style="color: rgba(0, 0, 0, .87)">小婷 -</span> 我相信它肯定能涨, 因为我准备大把的资金准备最高涨幅买入, 哈哈哈哈, 开玩笑的别认真。
          </mu-list-item-sub-title>
        </mu-list-item-content>
      </mu-list-item>
      <mu-divider></mu-divider>
      <mu-list-item avatar :ripple="false" button>
        <mu-list-item-action>
          <mu-avatar>
            <img src="https://muse-ui.org/img/avatar2.eff5aba4.jpg">
          </mu-avatar>
        </mu-list-item-action>
        <mu-list-item-content>
          <mu-list-item-title>感觉这波股市会大涨?</mu-list-item-title>
          <mu-list-item-sub-title>
            <span style="color: rgba(0, 0, 0, .87)">小婷 -</span> 我相信它肯定能涨, 因为我准备大把的资金准备最高涨幅买入, 哈哈哈哈, 开玩笑的别认真。
          </mu-list-item-sub-title>
        </mu-list-item-content>
      </mu-list-item>
      <mu-divider></mu-divider>
      <mu-list-item avatar :ripple="false" button>
        <mu-list-item-action>
          <mu-avatar>
            <img src="https://muse-ui.org/img/avatar2.eff5aba4.jpg">
          </mu-avatar>
        </mu-list-item-action>
        <mu-list-item-content>
          <mu-list-item-title>感觉这波股市会大涨?</mu-list-item-title>
          <mu-list-item-sub-title>
            <span style="color: rgba(0, 0, 0, .87)">小婷 -</span> 我相信它肯定能涨, 因为我准备大把的资金准备最高涨幅买入, 哈哈哈哈, 开玩笑的别认真。
          </mu-list-item-sub-title>
        </mu-list-item-content>
      </mu-list-item>
      <mu-divider></mu-divider>
      <mu-list-item avatar :ripple="false" button>
        <mu-list-item-action>
          <mu-avatar>
            <img src="https://muse-ui.org/img/avatar2.eff5aba4.jpg">
          </mu-avatar>
        </mu-list-item-action>
        <mu-list-item-content>
          <mu-list-item-title>感觉这波股市会大涨?</mu-list-item-title>
          <mu-list-item-sub-title>
            <span style="color: rgba(0, 0, 0, .87)">小婷 -</span> 我相信它肯定能涨, 因为我准备大把的资金准备最高涨幅买入, 哈哈哈哈, 开玩笑的别认真。
          </mu-list-item-sub-title>
        </mu-list-item-content>
      </mu-list-item>
      <mu-divider></mu-divider>
      <mu-list-item avatar :ripple="false" button>
        <mu-list-item-action>
          <mu-avatar>
            <img src="https://muse-ui.org/img/avatar2.eff5aba4.jpg">
          </mu-avatar>
        </mu-list-item-action>
        <mu-list-item-content>
          <mu-list-item-title>感觉这波股市会大涨?</mu-list-item-title>
          <mu-list-item-sub-title>
            <span style="color: rgba(0, 0, 0, .87)">小婷 -</span> 我相信它肯定能涨, 因为我准备大把的资金准备最高涨幅买入, 哈哈哈哈, 开玩笑的别认真。
          </mu-list-item-sub-title>
        </mu-list-item-content>
      </mu-list-item>
    </mu-list>
  </mu-paper>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
.demo-list-wrap {
  width: 100%;
  overflow: hidden;
}
</style>
