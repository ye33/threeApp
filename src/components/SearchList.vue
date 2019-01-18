<template>
  <div class="page search-list">
    <mt-search v-model="keyword" cancel-text="取消" placeholder="请输入关键字" autofocus @input="search"></mt-search>
    <mt-navbar>
      <mt-tab-item id="1" @click.native="changeGoods('goodsId','1')" :class="{'active':current=='1'}">综合</mt-tab-item>
      <mt-tab-item id="2" @click.native="changeGoods('orignal','2')" :class="{'active':current=='2'}">销量</mt-tab-item>
      <mt-tab-item id="3" @click.native="changeGoods('hot','3')" :class="{'active':current=='3'}">人气</mt-tab-item>
      <mt-tab-item id="4" @click.native="changeGoods('price','4')" :class="{'active':current=='4'}">价格</mt-tab-item>
      <mt-tab-item id="5" @click.native="changeGoods('time','5')" :class="{'active':current=='5'}">新品</mt-tab-item>
      <mt-tab-item id="6"  @click.native="changeGoods('time','6')" :class="{'active':current=='6'}">筛选</mt-tab-item>
    </mt-navbar>
    <ul class="list">
      <li v-for="item in result" :id="item.goodsId" :key="item.goodsId" @click="goto(item.goodsId)">
        <span class="pic">
          <img :src="item.image">
        </span>
        <p>{{item.name}}</p>
        <p>
          ￥{{item.price}}
          <span>/公斤</span>
        </p>
        <!--  <p>年份：{{item.year}}</p>
=======
    <mt-search v-model="keyword" cancel-text="取消" placeholder="搜索" autofocus @input="search">

    </mt-search>
    <mt-navbar>
      <mt-tab-item id="1">综合</mt-tab-item>
      <mt-tab-item id="2">销量</mt-tab-item>
      <mt-tab-item id="3">人气</mt-tab-item>
      <mt-tab-item id="3">价格</mt-tab-item>
      <mt-tab-item id="3">新品</mt-tab-item>
      <mt-tab-item id="3">筛选</mt-tab-item>

    </mt-navbar>
    <ul class="list">
      <li v-for="item in result" :key="item.spuId" @click.native="goto(item.spuId)">
        <span class="pic"><img :src="item.image"/></span>

        <p>{{item.name}}</p>
        <p>￥{{item.price}} <span>/公斤</span></p>
        <!- <p>年份：{{item.year}}</p>
>>>>>>> master
         <p>类型：{{item.genres.join()}}</p>
         <p>导演：{{item.directors.map(item=>item.name).join()}}</p>
        <p>主演：{{item.casts.map(item=>item.name).join()}}</p>-->
      </li>
    </ul>
  </div>
</template>
<script>
import "../sass/SearchList.scss";
export default {
  // props:['keyword'],
  data() {
    return {
      keyword: "",
      timer: null,
      result: [],
      selected: "",
      paramss: "",
      current:'1'
    };
  },
  methods: {
    search() {
      // 海->海王
      clearTimeout(this.timer);

      if (!this.keyword) return;

      // this.timer = setTimeout(() => {
      //  this.$axios
      //    .get("/dbapi/search/data.action?page=1&keyword=亚麻", {
      //      params: {
      //        q: this.keyword
      //      }
      //    })
      //    .then(res => {
      //      let data = res.data;
      //      console.log(data);

      this.timer = setTimeout(() => {
        this.$axios
          .get("http://39.108.252.230:4008/good/goodsHot", {
            params: {
              q: this.keyword
            }
          })
          .then(res => {
            let data = res.data;
            // console.log(data);

            this.result = data.data;
          });
      }, 1000);
    },
    goto(goodsId) {
      // console.log('/DataList/'+goodsId);
      this.$store.dispatch("getData", { goodsId });
      this.$router.push({ path: "/DataList/" + goodsId });
      // this.$router.push({name:'Detail',params:{id},query:{keyword:'xxx'}})
    },
    changeGoods(rule,id) {
      this.current=id;
      this.paramss = this.$route.params.params;
      if (this.paramss == "11" || this.paramss == "12" || this.paramss == "13") {
        this.paramss = "8";
      }
      this.search();

      this.$axios
        .get("http://39.108.252.230:4008/themeList1/" + this.paramss + "?rule=" + rule)
        .then(res => {
          let data = res.data;
          // console.log(data);

          this.result = data.data;
        });
    }
  },

  created() {
    // console.log(this.keyword);
    // 路由传参：缺点：获取繁琐
    this.paramss = this.$route.params.params;
    if (this.paramss == "11" || this.paramss == "12" || this.paramss == "13") {
      this.paramss = "8";
    }
    this.search();

    this.$axios
      .get("http://39.108.252.230:4008/themeList1/" + this.paramss+ "?rule=goodsId")
      .then(res => {
        let data = res.data;
        // console.log(data);

        this.result = data.data;
      });
  }
};

</script>
<style lang="scss" scoped>

  .active {
      background: #ccc;
    }
</style>
