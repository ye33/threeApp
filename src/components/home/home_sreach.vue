<template> 
    <div class="home_sreach">
          <span class="iconfont camera"> &#xe61d;</span>
      <mt-search
          v-model="value"
          cancel-text="登录"
          placeholder="输入关键字">
      
     </mt-search>

        
       
    </div>
</template>

<script type="text/javascript">


    export default{
        data(){
            return {
               value:""
            }
        },
    }
</script>

<style lang="scss" >

    

</style>