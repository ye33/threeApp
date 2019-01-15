<template>
  <div class="page search-list">

    <mt-search
      v-model="keyword"
      cancel-text="取消"
      placeholder="请输入关键字"
      autofocus
      @input="search"
    >
      
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
    <li v-for="item in result" :id="item.goodsId"  :key="item.goodsId" @click="goto(item.goodsId)">
        <span class="pic"><img :src="item.image"/></span>
        
          <p>{{item.name}}</p>
          <p>￥{{item.price}} <span>/公斤</span></p>
         <!--  <p>年份：{{item.year}}</p>
         <p>类型：{{item.genres.join()}}</p>
         <p>导演：{{item.directors.map(item=>item.name).join()}}</p>
         <p>主演：{{item.casts.map(item=>item.name).join()}}</p> -->
      
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
      selected:""
    };
  },
  methods: {
    search() {
      // 海->海王
      clearTimeout(this.timer);

      if (!this.keyword) return;

      this.timer = setTimeout(() =>{
        this.$axios
          .get("http://10.3.141.145:4008/good/goodsHot", {
            params: {
              q: this.keyword
            }
          })
          .then(res => {
            let data = res.data;
            console.log(data);

            this.result=data.data;
          });
      }, 1000);
    },
    goto(goodsId){
      console.log('/DataList/'+goodsId);
      this.$store.dispatch('getData',{goodsId});
      this.$router.push({path:'/DataList/'+goodsId})
      // this.$router.push({name:'Detail',params:{id},query:{keyword:'xxx'}})
    }
  },

  created() {
    console.log(this.keyword);
    // 路由传参：缺点：获取繁琐
    // this.keyword = this.$route.params.keyword;
    this.search();

        this.$axios.get("http://10.3.141.145:4008/good/goodsHot").then(res=>{
               let data = res.data;
            console.log(data);

            this.result=data.data;
               
            });
   

  }
};
</script>
<style lang="scss">


</style>
