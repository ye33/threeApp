<template> 
    <div class="home_carousel">
       <mt-swipe :auto="4000">
              <mt-swipe-item v-for="(item,idx) in recommend" :key="idx" >
                  <img :src="item.images.mdpi"/>
              </mt-swipe-item>
            </mt-swipe>
    
    </div>
</template>

<script type="text/javascript">


    export default{
       data(){
            return {
                recommend:[],
            
            }
        },
      
        created(){
            this.$axios.get("/dbapi/banner/list.action?type=wx_index").then(res=>{
                let data=res.data.response.list;
                

                this.recommend=JSON.parse(JSON.stringify(data));
               
            });
        }
    }
</script>

<style lang="scss" >

    

</style>