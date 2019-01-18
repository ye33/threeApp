<template>
  <div class="shoppingList">
    <h2>
      <span>|</span>
      <span>带你逛逛</span>
    </h2>
    <div class="goodsListContainer" :style="bgCss">
      <div class="new_theme">
        <a href="#">
          <span class="iconfont icon-huanyipi"></span>
          <span>换一批</span>
        </a>
      </div>
      <div class="girl" :style="bgCss2"></div>
      <ul class="new_box">
        <li class="newItem" v-for="item in shoppingList" :key="item.cid" @click="goto(item.cid)">
          <img :src="item.imgurl">
          <div>
            <p>{{item.title}}</p>
            <span>{{item.content}}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script type="text/javascript">
import imgurl2 from "@/img/stroll_bg.727119f.png";
import imgurl3 from "@/img/mt.30e5795.png";

export default {
  data() {
    return {
      imgurl2,
      imgurl3,
      shoppingList: []
    };
  },
  computed: {
    bgCss() {
      return {
        background: `url(${this.imgurl2}) no-repeat`,
        backgroundSize: "cover"
      };
    },
    bgCss2() {
      return {
        background: `url(${this.imgurl3}) no-repeat`,
        backgroundSize: "cover"
      };
    }
  },
  methods: {
    goto(cid) {
      this.$router.push({
        name: "category",
        params: {
          cid: cid
        }
      });
    }
  },
  created() {
    this.$axios.get("http://39.108.252.230:4008/themeList1").then(res => {
      this.shoppingList = res.data.data.slice(0, 4);
    });
  }
};
</script>
<style lang="scss" scoped>
.shoppingList {
  text-align: left;
  margin-bottom: 10px;
  > h2 {
    font-weight: normal;
    height: 34px;
    line-height: 34px;
    padding-left: 7px;
    span:nth-child(1) {
      color: #934d91;
      font-size: 16px;
      font-weight: 900;
      margin-right: 3px;
    }
    span:nth-child(2) {
      font-size: 10px;
      -webkit-transform: scale(0.7);
      transform: scale(0.7);
    }
  }
  .goodsListContainer {
    position: relative;
    .new_theme {
      text-align: right;
      padding: 35px 15px 0 20px;
      .iconfont {
        display: inline-block;
        vertical-align: middle;
      }
    }
    .girl {
      width: 83px;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
    }
    .new_box {
      margin: 0px 10px 0 60px;
      padding: 12px 0 6px 3px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      li {
        width: 45%;
        position: relative;
        border-radius: 5px;
        margin-bottom: 3px;
        img {
          width: 100%;
          height: 80px;
        }
        > div {
          width: 114px;
          height: 40px;
          text-align: center;
          color: #eea;
          position: absolute;
          bottom: 0;
          left: 0;
          padding-top: 5px;
          background: rgba(0, 0, 0, 0.5);
          span {
            display: block;
            font-size: 12px;
            -webkit-transform: scale(0.8);
            transform: scale(0.8);
          }
        }
      }
    }
  }
}
</style>