<template> 

     <div class="page home">
            <home_sreach/>
            <home_carousel/>
            <home_upload/>
        <goodsList_new/>
        <goodsList_commend/>
        <shoppingList/>
        <beautifulTalkList/> 
        <home_brand/>
    </div>

</template>


<script type="text/javascript">

import home_sreach from "./home/home_sreach"
import home_carousel from "./home/home_carousel"
import home_upload from "./home/home_upload"
import home_brand from "./home/home_brand"
import goodsList_new from './home/goodsList_new.vue';
import goodsList_commend from './home/goodsList_commend.vue';
import shoppingList from './home/shoppingList.vue';
import beautifulTalkList from './home/beautifulTalkList.vue';


    export default{
        components:{
          home_sreach,
          home_carousel,
          home_upload,
          home_brand,
           goodsList_new,
            goodsList_commend,
            shoppingList,
            beautifulTalkList
        }
            
}
</script>