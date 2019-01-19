<template>
  <div class="listcotton">
    <!-- <h2><i>◆</i>主要分类</h2> -->
    <div v-for="(item,idx) in goodslist" :id="item.idx" :key="idx" >
      <p>
        <i>◆</i>
        {{item.name}}
      </p>
      <ul>
        <li v-for="(content,idx) in item.data" :key="idx" @click="goto">{{content}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    goodslist: {
      type: Array
    },
    lid:{
      type:Number
    },
    name:{
      type:String
    }
  },
  data() {
    return {
      datalist: []
    }
  },
  methods:{
    goto(){
      this.$router.push({
        name: "searchlist",
        params: {
          lid: this.lid,
          name:this.name
        }
      });
    }
  }
};
</script>

<style lang="scss">
.listcotton {
  height: 100%;
  div {
    width: 242px;

    overflow: hidden;

    p {
      width: 242px;
      height: 26px;
      text-align: left;
      font-size: 12px;
      color: #444444;
      line-height: 28px;
      padding-left: 10px;
      color: red;
      i {
        color: #fcb859;
      }
    }

    ul {
      width: 242px;

      li {
        width: 80px;
        height: 30px;
        float: left;
      }
    }
  }
}
</style>