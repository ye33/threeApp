<template>
  <div class="in_details">
    <ul class="imgs">
      <li v-for="(item,idx) in datalist.imgs" :key="idx">
        <img :src="item">
      </li>
    </ul>
  </div>
</template>

<script type="text/javascript">
export default {
  //  props:{
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
.DataList{
  width:100%;
  .mint-navbar{
    width:100%;
  }
}
.imgs img {
  width: 100%;
}
</style>