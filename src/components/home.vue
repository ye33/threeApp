<template> 
        <div class="page">
            <home_sreach/>
            <home_carousel/>
            <home_upload/>
            <home_brand/>
         </div>
</template>


<script type="text/javascript">
import home_sreach from "./home/home_sreach"
import home_carousel from "./home/home_carousel"
import home_upload from "./home/home_upload"
import home_brand from "./home/home_brand"
    export default{
        components:{
          home_sreach,
          home_carousel,
          home_upload,
          home_brand
        }
            
    }
</script>