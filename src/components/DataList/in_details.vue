<template> 
    <div class="in_details">
         <ul class="imgs">
           <li v-for="(item,idx) in datalist.imgs" :key="idx">
               <img :src="item"/>
            </li>
        </ul>
         
    </div>
</template>

<script type="text/javascript">
    export default{
        //  props:{
        //     data:{
        //         type:Object
        //     }
        // },
        data(){

            return {
                recommend:[],
                datalist:{}
                // imgs:[]
            }
        },
        mounted(){console.log(123);
          // console.log("this.data",this.data);
          console.log('kkk',this.$store.state.data);
          this.datalist=this.$store.state.data;
        }


    }
</script>

<style lang="scss">
    
      .imgs img{
          width: 100%;
        }

</style>