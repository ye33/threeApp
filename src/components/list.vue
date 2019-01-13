<template> 

    <div class="list">

        <mt-header title="商品列表">
        <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
         </router-link>
        </mt-header>
    
        <div class="listcategory">
        <ul class="list_l">
            <li v-for="(item,idx) in goodslist" :key="idx" :class="{'active':current==idx}" @click="changeCid(item.id)">{{item.category}}</li>
        </ul> 
        <div class="list_r">
          
                <listcotton :goodslist="sendData" />
                 <!-- <router-view :data="recommend" /> -->
        </div>     
      </div>
       
</div>

</template>

<script type="text/javascript">
import listcotton from './list/listcotton.vue';
// import "./sass/listcotton.scss"

    export default{
        data(){
            return {
                 recommend:[],
                 goodslist:[
                    {
                        category:'棉类面料',
                        id:0
                    },{
                        category:'麻类面料',
                        id:1
                    },{
                        category:'人造纤维',
                        id:2
                    },{
                        category:'化纤面料',
                        id:3
                    },{
                        category:'毛纺面料',
                        id:4
                    },{
                        category:'混纺、交织类',
                        id:5
                    },{
                        category:'丝绸面料',
                        id:6
                    },{
                        category:'皮革',
                        id:7
                    },{
                        category:'面料用途',
                        id:8
                    },{
                        category:'纱线',
                        id:9
                    },{
                        category:'纺织辅料',
                        id:10
                    }
                 ],
                 current:0,
                 sendData:[]
            }
        },

        components:{
            listcotton
        },
         methods:{
            goto(idx){
                this.$router.push({path:'/list/'+idx});
                console.log({path:'/list/'+idx});
            },
            changeCid(cid){
                this.current=cid;
                this.sendData=this.recommend[cid].data;
            }
        },
         created(){
            this.$axios.get("/dbapi/common/category/data.action?").then(res=>{
                let data=res.data.response.list;
                this.recommend=data;
                this.sendData=data[0].data;
            });
        }
    
       
    }
</script>

<style type="text/css">

</style>