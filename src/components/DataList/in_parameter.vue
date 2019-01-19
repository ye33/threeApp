<template>
  <div class="in_evaluation">
    <ul class="imgs">
      <!--   <li v-for="(item,idx) in recommend" :key="idx">
               <img :src="item"/>
                              </li>
      -->
      <p>
        <img :src="datalist.image">
      </p>
      <!-- <mt-popup
              
                position="bottom">
                下部弹出
                </mt-popup>  -->
    </ul>
  </div>
</template>

<script type="text/javascript">
export default {
  //   props:{
  //     data:{
  //         type:Object
  //     }
  // },
  data() {
    return {
      recommend: [],
      datalist: {}
      // imgs:[]
    };
  },
  mounted() {
    // console.log("this.data",this.data);
    // console.log('kkk',this.$store.state.data);
    this.datalist = this.$store.state.data;
  }
};
</script>


<style lang="scss">
.imgs img {
  width: 100%;
}

.mint-popup{
  width: 50px;
  height: 50px;
}
</style>