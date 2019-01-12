<template>
    <div class="page cart">
         <mt-header title="秋冬服运动毛圈布现货服装针织">
            <router-link to="/" slot="left">
            <mt-button icon="back"></mt-button>
            </router-link>
            
         
             <mt-button="iconfont">&#xe606;</mt-button>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
         <span class="iconfont buycart">&#xe606;</span>

         <mt-navbar v-model="selected">
          <mt-tab-item :id="tab.name" :key="tab.name" v-for="tab in tabs" @click.native="goto(tab.name)">{{tab.title}}</mt-tab-item>
        </mt-navbar>
        
        <router-view/>

        <div class="datalistbottom">
            <mt-tabbar v-model="choosed" fixed>
              <mt-tab-item :id="tab.name" v-for="tab in buycar" :key="tab.name" @click.native="goto(tab.path)">
              <span :class="['iconfont',tab.icon]"></span>
              <span class="text">{{tab.text}}</span>
              </mt-tab-item>
            </mt-tabbar>
        </div>

        
    </div>
</template>
<script>
import "../sass/in_baby.scss"
    export default {
        data() {
            return {
                 buycar:[
                            {
                                text:'客服',
                                icon:'icon-kefu',
                                path:'/s',
                                name:'a'
                            },{
                                text:'收藏',
                                icon:'icon-shoucang',
                                path:'/s',
                                name:'list'
                            },{
                                text:'拿色卡',
                                icon:'icon-biaoqian',
                                path:'/s',
                                name:'r'
                            },{
                                text:'加入购物车',
                                icon:'icon-gouwuche',
                                path:'/s',
                                name:'cart'
                            },{
                                text:'立即购买',
                                icon:'icon-tubiaolunkuo-',
                                path:'/s',
                                name:'mine'
                            }],

                tabs: [{
                    title: "宝贝",
                    name: "in_baby"
                },
                {
                    title: "详情",
                    name: "in_details"
                },
                {
                    title: "参数",
                    name: "in_parameter"
                },
                {
                    title: "评价",
                    name: "in_evaluation"
                }
                ],

                selected:'in_baby',
                choosed:'cart'
           }
        },
        methods:{
            goto(name){
                this.$router.push({path:'/cart/'+name});
            }
        },
        mounted(){
       
    },
  
    watch:{
        $route(val,oldval){
          
        }
    }
}
      

</script>


<style  lang="scss">
    .cart{
            position:relative;
            .buycart{
                position:absolute;
                top:9px;
                right:39px;
            }

        .datalistbottom{
                    width:100%;
                    height:46px;
                    position:fixed;
                    bottom:0px;
                    z-index:300;
                    .icon-gouwuche{
                        display:none;
                    }
                     .icon-tubiaolunkuo-{
                        display:none;
                    }
                    .mint-tab-item:nth-of-type(4){
                       
                        text-align:center;
                      
                        width:20px;
                        height:47px;
                        background:#F4C43B;

                                .text{
                                    line-height:40px;
                                  
                                }
                    }


                     .mint-tab-item:nth-of-type(5){
                       
                        text-align:center;
                      
                        width:20px;
                        height:47px;
                        background:#934D91;

                                .text{
                                    line-height:40px;
                                    color:#fff;
                                }
                    }

        }
        
        .mint-header{
        background:pink;
        border:1px solid #ccc;

    }
}

</style>