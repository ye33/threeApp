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
        
    </div>
</template>
<script>

    export default {
        data() {
            return {
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
                selected:'in_baby'
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
        
        .mint-header{
        background:pink;
        border:1px solid #ccc;

    }
}

</style>