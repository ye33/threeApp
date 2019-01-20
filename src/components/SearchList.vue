<template>
  <div class="page search-list">
    <mt-search v-model="keyword" cancel-text="取消" placeholder="请输入关键字" autofocus @input="search"></mt-search>
    <mt-navbar>
      <mt-tab-item id="1" @click.native="changeGoods('goodsId','1')" :class="{'activeItem':current=='1'}">综合</mt-tab-item>
      <mt-tab-item id="2" @click.native="changeGoods('orignal','2')" :class="{'activeItem':current=='2'}">销量</mt-tab-item>
      <mt-tab-item id="3" @click.native="changeGoods('hot','3')" :class="{'activeItem':current=='3'}">人气</mt-tab-item>
      <mt-tab-item id="4" @click.native="changeGoods('price','4')" :class="{'activeItem':current=='4'}">价格</mt-tab-item>
      <mt-tab-item id="5" @click.native="changeGoods('time','5')" :class="{'activeItem':current=='5'}">新品</mt-tab-item>
      <mt-tab-item id="6"  @click.native="changeGoods('time','6')" :class="{'activeItem':current=='6'}">筛选</mt-tab-item>
    </mt-navbar>
    <ul class="list">
      <li v-for="item in result" :id="item.goodsId" :key="item.goodsId" @click.stop="goto(item.goodsId)">
        <span class="pic">
          <img :src="item.image">
        </span>
        <p>{{item.name}}</p>
        <p>
          ￥{{item.price}}
          <span>/公斤</span>
        </p>
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
      lid: 1,
      current:'1'
    };
  },
  computed:{
    // getkeyword(){
    //   this.lid = this.$route.params.lid;
    //   this.keyword=this.$route.params.name;
    //   return this.keyword
    // }
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
          .get("http://39.108.252.230:4008/list/like", {
            params: {
              keyword: this.keyword
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
      if(this.$route.params.lid){
      this.lid = this.$route.params.lid;

      this.$axios
        .get("http://39.108.252.230:4008/list/subList/" + this.lid + "?rule=" + rule)
        .then(res => {
          let data = res.data;
          // console.log(data);

          this.result = data.data;
        });
      }else{
        this.$axios
          .get("http://39.108.252.230:4008/list/like", {
            params: {
              keyword: this.keyword,
              rule:rule
            }
          })
          .then(res => {
            let data = res.data;
            // console.log(data);

            this.result = data.data;
          });
      }
    }
  },

  created() {
    // console.log(this.keyword);
    // 路由传参：缺点：获取繁琐
    this.lid = this.$route.params.lid;
    this.keyword=this.$route.params.name;

    this.$axios
      .get("http://39.108.252.230:4008/list/subList/" + this.lid+ "?rule=goodsId")
      .then(res => {
        let data = res.data;
        // console.log(data);

        this.result = data.data;
      });
  }
};

</script>
<style lang="scss" >
.search-list{
  width:100%;
  height:100%;
  background-color: #f0f0f0;
}
.mint-search-list{
  height:0px;
}
.search-list .list li {
    height:198px;
}
  .page search-list .mint-search-list{
    display:none !important;
    height:0px;
    position:static !important;
  }
  .activeItem {
      border-bottom: 2px solid #944d91;
      color:#944d91;
      font-weight:900;
    }
</style>
