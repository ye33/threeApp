<template>
  <div class="goodsList_new">
    <h2>
        <span>|</span>
        <span>新品上市</span>
    </h2>
    <div class="goodsListContainer" :style="bgCss">
        <div class="new_theme">
            <span class="s1">赏“新”悦目</span>
            <span class="s2">新品发布</span>
            <span class="s3">查看全部</span>
        </div>
        <ul class="new_box">
            <li class="newItem" v-for="item in goodsList_new" :key="item.goodsId" @click="goto">
                <img :src="item.image" />
                <p>{{item.name}}</p>
                <span>¥{{item.price}}</span>
            </li>
        </ul>
    </div>
  </div>
</template>
<script type="text/javascript">
import imgurl1 from '@/img/xp_bg.dc7bd36.png';

export default {
    data(){
        return {
            imgurl1,
            goodsList_new:[]
        }
    },
    computed:{
        bgCss(){
            return {
                background:`url(${this.imgurl1}) no-repeat`,
                backgroundSize: 'cover'
            }
        }
    },
    methods:{
        goto(){
            this.$router.push({name:'category'});
        }
    },
    created(){
        this.$axios.get("/dbapi/index/data.action?").then(res=>{
            this.goodsList_new=(res.data.response.resultList.goodsList_new).slice(0,3);
        });
    }
}

</script>
<style lang="scss" scoped>
.goodsList_new {
  text-align: left;
  >h2 {
    font-weight: normal;
    height: 34px;
    line-height: 34px;
    padding-left: 7px;

    span:nth-child(1) {
      color: #934d91;
      font-size: 16px;
      font-weight: 900;
      margin-right: 3px;
    }

    span:nth-child(2) {
      font-size: 10px;
      -webkit-transform: scale(0.7);
      transform: scale(0.7);
    }
  }
  .goodsListContainer{
    padding-bottom:8px;
    .new_theme{
        padding:35px 0 0 20px;
        span{
            display:block;
            font-family: PingFangSC Light;
            color: #474747;
        }
        .s1{
            font-size:15px;
            margin-bottom:6px;
            font-weight:900;
        }
        .s2{
            font-size:12px;
            margin-bottom:6px;
        }
        .s3{
            display:inline-block;
            font-size:12px;
            padding:6px 8px;
            margin-left:-5px;
            border:1px solid #666;
            -webkit-transform: scale(0.8);
            transform: scale(0.8);
        }
    }
    .new_box{
        margin:10px;
        background:#fff;
        padding:12px 3px 6px 3px;
        display:flex;
        justify-content: space-around;
        li{
            text-align:center;
            color:#474747;
            font-size:12px;
            font-weight:600;
            width:100px;
            img{
                display:inline-block;
                width:88px;
                height:88px;
            }
            p,span{
                -webkit-transform: scale(0.8);
                transform: scale(0.8);
            }
            span{
                color:#e53b06;
                line-height:18px;
            }
        }

    }
  }
}

</style>
