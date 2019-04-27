<template>
  <div style="width: 100%;height: 100vh">
    <mu-flex direction="column" style="width: 100%;height: 100vh;">
      <mu-flex style="width: 100%">
        <mu-appbar style="width: 100%;" color="primary">
          <mu-button icon slot="left" @click.native="goBack">
            <mu-icon value="arrow_back"></mu-icon>
          </mu-button>StockMarket
          <mu-button icon slot="right" to="/search">
            <mu-icon value="search"></mu-icon>
          </mu-button>
        </mu-appbar>
      </mu-flex>
      <mu-flex style="width: 100%;" fill>
        <router-view class="compoment" style="width: 100%;padding: 0px"/>
      </mu-flex>
      <mu-flex style="width: 100%;" class="bottom-bar">
        <mu-container style="width: 100%;padding: 0px">
          <mu-bottom-nav color="primary" shift>
            <mu-bottom-nav-item title="首页" icon="home" to="/"></mu-bottom-nav-item>
            <mu-bottom-nav-item title="行情" icon="trending_up" to="/stocks"></mu-bottom-nav-item>
            <mu-bottom-nav-item
              title="交易"
              icon="attach_money"
              @click.native="$toast.info('功能正在通宵达旦地开发中')"
            ></mu-bottom-nav-item>
            <mu-bottom-nav-item
              title="我的"
              icon="person_pin"
              @click.native="$toast.info('功能正在通宵达旦地开发中')"
            ></mu-bottom-nav-item>
          </mu-bottom-nav>
        </mu-container>
      </mu-flex>
    </mu-flex>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    try {
      document.body.removeChild(document.getElementById("loading"));
    } catch (e) {}
  },
  methods: {
    goBack() {
      this.$router.back(-1);
    },
    gotoRoute(path) {
      this.$router.push(path);
    }
  }
};
</script>

<style>
@import "https://cdn.bootcss.com/material-design-icons/3.0.1/iconfont/material-icons.css";
@import "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic";
.compoment{
  margin-bottom: 56px;
}
.bottom-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
}
</style>
