<template> 
    <div class="home_upload">
        
        <ul class="home_uploadbottom">
                <li v-for="(item,idx) in recommend" @click="goto" 
                 :key="idx" 
                 :id="item._id">
                  
                  <img :src="item.image" alt="" />
               
            </li>
            
        </ul>
    </div>
</template>

<script type="text/javascript">

export default{
       data(){
         return {
                recommend:[]
             
            }
        },
     
      
        created(){

        this.$axios.get("http://10.3.141.145:4008/themeList2").then(res=>{
                let data=res.data.data;
               
               console.log("list:",data);

                this.recommend=data;
                 // console.log(this.recommend);
               
            });
        },
        methods:{
        goto(){
            this.$router.push({name:'searchlist'});
        }
    }
    }
</script>

<style lang="scss" >

    

</style>