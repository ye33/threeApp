<template> 
    <div class="home_brand">
            <h2><span>|</span>优质品牌区</h2>
            <div class="brand">
                <ul class="brandlogo">
                    <li  v-for="(item,idx) in recommend" :key="idx">
                        <img :src="item.logo" alt="" />
                        <p>{{item.name}}</p>
                    </li>
                  
                    
                </ul>
            </div>
           
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
            this.$axios.get("/dbapi/index/data.action?").then(res=>{
                let data=res.data.response.resultList.brandList;
               

                this.recommend=data;
                 console.log(this.recommend);
               
            });
        }
    }
</script>

<style lang="scss" >

    

</style>