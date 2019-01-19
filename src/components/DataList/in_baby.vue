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
             <h3>已选：请选择规格   </h3>
              <div class="right"> 
            <!-- 购物车的加减          -->
            <span class="mark" @click.stop="numDecrease(number)">-</span>
            <input
            ref="form"
              type="text"
              v-model="number"
              step="0.1"
              min="1"
              class="cacul"          
            >
            
            <span class="mark" @click.stop="numAdd(number)">+</span>
            <i class="mintui mintui-more"></i>
          </div> 
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
    
        data(){
            return {
                recommend:[],
                datalist:{},
                // imgs:[]
                number:1
            }
        },
        computed:{
          getData:function(){
            this.datalist=this.$store.state.data;
            console.log(this.datalist);
            return this.datalist
          }
        },
        methods: {
            numDecrease(number) {
            this.number = (number * 10 - 1) / 10;
            this.$store.commit('changeqty',{number:this.number});
            },
            numAdd(number) {
            this.number =(number * 10 + 1) / 10;
            this.$store.commit('changeqty',{number:this.number});
          }
     }
    }
</script>

<style lang="scss">

</style>