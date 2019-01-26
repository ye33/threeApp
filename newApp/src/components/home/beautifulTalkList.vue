<template>
  <div class="beautifulTalkList" :style="bgCss">
    <h2>时尚LOOK</h2>
    <div class="goodsListContainer">
      <ul class="new_box">
        <li
          class="newItem clearfix"
          v-for="item in beautifulTalkList"
          :key="item.fashionId"
          @click="goto(item.fashionId)"
        >
          <div class="detail">
            <h4>{{item.title}}</h4>
            <p class="subTitle">{{item.subTitle}}</p>
            <p class="read">
              <span class="iconfont icon-liulan"></span>
              {{item.hits}}
            </p>
            <p class="time">
              <span class="iconfont icon-shijian"></span>
              {{item.releasedTime | formateDate}}
            </p>
          </div>
          <div class="itemImg">
            <img :src="item.cover">
          </div>
        </li>
      </ul>
      <span class="more">查看更多></span>
    </div>
  </div>
</template>
<script type="text/javascript">
import imgurl4 from "@/img/bg.73065ea.png";
import formateDate from "@/filter/index.js";

export default {
  data() {
    return {
      imgurl4,
      beautifulTalkList: []
    };
  },
  filters: {
    formateDate
  },
  computed: {
    bgCss() {
      return {
        background: `url(${this.imgurl4}) no-repeat`,
        backgroundSize: "cover"
      };
    }
  },
  methods: {
    goto(id) {
      this.$router.push({
        name: "fashiondetail",
        params: {
          fashionid: id
        }
      });
    }
  },
  created() {
    this.$axios.get("http://39.108.252.230:4008/fashion").then(res => {
      this.beautifulTalkList = res.data.data.slice(3, 6);
      // console.log(res.data.data);
    });
  }
};
</script>
<style lang="scss" scoped>
.beautifulTalkList {
  text-align: center;
  > h2 {
    font-size: 14px;
    text-align: left;
    color: #934d91;
    height: 38px;
    line-height: 38px;
    padding-left: 15px;
  }
  .goodsListContainer {
    margin-bottom: 6px;
    .new_box {
      padding: 0 8px;
      text-align: left;
      li {
        padding: 10px 8px 0 8px;
        background: #fff;
        border-radius: 6px;
        margin-bottom: 6px;
        .detail {
          float: left;
          width: 240px;
          color: #474747;
          font-size: 12px;
          -webkit-transform: scale(0.9);
          transform: scale(0.9);
          margin: -5px 0 0 -20px;
          padding-left: 10px;
          .subTitle {
            margin-left: -25px;
            line-height: 18px;
            -webkit-transform: scale(0.8);
            transform: scale(0.8);
          }
          .read,
          .time {
            display: inline-block;
            margin-top: 15px;
            color: #8b8b8b;
            .iconfont {
              display: inline-block;
              vertical-align: middle;
            }
            .icon-shijian {
              font-size: 14px;
              margin: 0 0 0 10px;
            }
          }
        }
        .itemImg {
          float: right;
          img {
            display: block;
            width: 65px;
            height: 65px;
            margin-top: 5px;
          }
        }
      }
    }
    .more {
      display: inline-block;
      padding: 10px 0;
      font-size: 14px;
      font-weight: 600;
    }
  }
}
</style>