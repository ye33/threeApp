<template> 
    <div class="in_baby">
     
      <mt-swipe :auto="0">
              <mt-swipe-item v-for="(item,idx) in getData.imgs" :key="idx" >
                  <img :src="item"/>
              </mt-swipe-item>
            </mt-swipe>

    
        <div class="price">
             <h3>{{datalist.name}}</h3>
            <p>￥{{datalist.price}}<span>/米</span><del>￥{{datalist.original}}</del></p>
        </div>
        
        <div class="size">
             <h3>已选：请选择规格   <i class="mintui mintui-more"></i></h3>
            <p>运费：不包含运费</p>
        </div>


           <div class="promise">
           <span class="iconfont">&#xe604;</span>  &nbsp  卖家承诺48小时发货
        </div>
  

        <h2>宝贝评价(0) <span>好评率0%</span></h2>

        <ul class="imgs">
            <li v-for="(item,idx) in datalist.imgs" :key="idx">
               <img :src="item"/>
            </li>
        </ul>
          </div>
</template>



<script type="text/javascript">

    export default{
       // props:{
       //      datahaha:{
       //          type:Object
       //      }
       //  },
        data(){

            return {
                recommend:[],
                datalist:{}
                // imgs:[]
            }
        },
        computed:{
          getData:function(){
            this.datalist=this.$store.state.data;
            return this.datalist
          }
        },
        // mounted(){

        //   // console.log("this.data",this.data);
        //   console.log('kkk',this.$store.state.data);
        //   this.datalist=this.$store.state.data;
        // }


        // created(){
        //     this.$axios.get("/dbapi/goods/detail/data.action?goodsId=1673").then(res=>{
        //         let imgurl=res.data.response.data.images;                
        //         this.recommend=imgurl;
        //         let data=res.data.response.data;
        //         this.data=data;


               
        //     });
        // }
    }
</script>

<style lang="scss">

</style>