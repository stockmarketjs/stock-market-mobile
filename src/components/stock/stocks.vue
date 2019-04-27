<template>
  <div>
      <mu-paper :z-depth="1">
        <mu-data-table
          stripe
          :columns="columns"
          :sort.sync="sort"
          @sort-change="handleSortChange"
          :data="stocks"
          :min-col-width="0"
          @row-click="showStock"
        >
          <template slot-scope="scope">
            <td>{{scope.row.name}}</td>
            <td class="is-center" :class="setClass(scope.row.change)">{{scope.row.change}}</td>
            <td class="is-center" :class="setClass(scope.row.change)">{{scope.row.changePer}}%</td>
          </template>
        </mu-data-table>
      </mu-paper>
  </div>
</template>

<script>
export default {
  created() {
    this.getStocks();
  },
  destroyed() {
    clearTimeout(this.timer);
  },
  beforeRouteLeave(to, from, next) {
    clearTimeout(this.timer);
    next();
  },
  methods: {
    setClass(change) {
      return change >= 0 ? "red" : "green";
    },
    handleSortChange({ name, order }) {
      this.stocks = this.stocks.sort((a, b) =>
        order === "asc" ? a[name] - b[name] : b[name] - a[name]
      );
    },
    showStock(index, row) {
      this.$router.push(`/stock/${row.id}`);
    },
    getStocks() {
      this.axios
        .get("api/stocks")
        .then(res => {
          this.stocks = res.data.map(v => {
            v.market = v.market === "sh" ? "沪市" : "深市";
            v.changePer = this._.round((v.change / v.startPrice) * 100, 2);
            return v;
          });
          this.timer = setTimeout(() => {
            this.getStocks();
          }, 5000);
        })
        .catch(e => {
          this.timer = setTimeout(() => {
            this.getStocks();
          }, 10000);
        });
    }
  },
  data() {
    return {
      sort: {
        name: "",
        order: "asc"
      },
      columns: [
        { title: "名称", name: "name" },
        {
          title: "涨跌",
          name: "change",
          sortable: true
        },
        {
          title: "涨跌幅",
          name: "changePer",
          sortable: true
        }
      ],
      timer: null,
      stocks: []
    };
  }
};
</script>

<style scoped>
.red {
  color: red;
}
.green {
  color: green;
}
</style>
