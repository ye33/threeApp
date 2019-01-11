<template> 
    <div class="page home">
        <goodsList_new/>
        <goodsList_commend/>
        <shoppingList/>
        <beautifulTalkList/>
    </div>
</template>

<script type="text/javascript">
    import goodsList_new from './home/goodsList_new.vue';
    import goodsList_commend from './home/goodsList_commend.vue';
    import shoppingList from './home/shoppingList.vue';
    import beautifulTalkList from './home/beautifulTalkList.vue';

    export default{
        components:{
            goodsList_new,
            goodsList_commend,
            shoppingList,
            beautifulTalkList
        }
    }
</script>