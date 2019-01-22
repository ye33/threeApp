<template>
  <div class="in_evaluation">
    <div class="nodata" :style="bgCss"></div>
  </div>
</template>

<script type="text/javascript">
import imgurl2 from "@/img/noData_bg.png";

export default {
  data() {
    return {
      imgurl2
    };
  },
  computed: {
    bgCss() {
      return {
        background: `url(${this.imgurl2}) no-repeat -5px -12px`
      };
    }
  }
};
</script>

<style lang="scss">
.DataList{
  width:100%;
}
.mint-navbar{
  width:100%;
  display:flex;
}
 .mint-tab-item{
   flex:1;
 }
.in_evaluation {
  width: 100%;
  // height:100%;
  min-height: 600px;
  background: #f0f0f0;
  position: relative;



  .nodata {
    width: 163px;
    height: 187px;
    background-size: "contain";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }
}
</style>