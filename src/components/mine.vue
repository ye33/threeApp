<template>
  <div class="mine">
    <div class="top" :style="bgCss">
      <div class="mark clearfix">
        <span class="iconfont icon-shezhi fl"></span>
        <span class="rmark fr" @click="showSkip">•••</span>
        <ul class="skip" v-show="skip">
          <li v-for="item in skipIcon" :key="item.status" @click="goto(item.name)">
            <span :class="['iconfont',item.icon]"></span>
            <span>{{item.status}}</span>
          </li>
        </ul>
      </div>
      <div class="login">
        <span class="iconfont icon-wode" @click="goto('login')"></span>
        <p @click="goto('login')">登录/注册</p>
      </div>
    </div>
    <ul class="goodStatus">
      <li v-for="item in goodStatus" :key="item.status">
        <span :class="['iconfont',item.icon]"></span>
        <span class="status">{{item.status}}</span>
      </li>
    </ul>
    <ul class="server">
      <li v-for="item in server" :key="item.status">
        <span :class="['iconfont',item.icon]"></span>
        <span class="status">{{item.status}}</span>
      </li>
    </ul>
  </div>
</template>

<script type="text/javascript">
import imgurl from "@/img/my_bg.6f93e28.png";

export default {
  data() {
    return {
      imgurl,
      skip: false,
      goodStatus: [
        {
          status: "待付款",
          icon: "icon-daizhifudingdan"
        },
        {
          status: "待送货",
          icon: "icon-daifahuo"
        },
        {
          status: "待收货",
          icon: "icon-fahuo"
        },
        {
          status: "待评价",
          icon: "icon-daipingjia"
        },
        {
          status: "全部订单",
          icon: "icon-tubiaolunkuo-"
        }
      ],
      server: [
        {
          status: "我的关注",
          icon: "icon-shoucang1"
        },
        {
          status: "我的色卡",
          icon: "icon-biaoqian"
        },
        {
          status: "我的评价",
          icon: "icon-pingjia"
        },
        {
          status: "收货地址",
          icon: "icon-dizhi"
        },
        {
          status: "优惠券",
          icon: "icon-youhuiquan"
        },
        {
          status: "售后服务",
          icon: "icon-gongju"
        }
      ],
      skipIcon: [
        {
          status: "首页",
          icon: "icon-shouye",
          name: "home"
        },
        {
          status: "客服",
          icon: "icon-kefu",
          name: "service"
        },
        {
          status: "消息",
          icon: "icon-xiaoxi1",
          name: "mine"
        }
      ]
    };
  },
  computed: {
    bgCss() {
      return {
        background: `url(${this.imgurl}) no-repeat`,
        backgroundSize: "contain"
      };
    }
  },
  methods: {
    showSkip() {
      this.skip = !this.skip;
    },
    goto(name) {
      this.$router.push({
        name
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.mine {
  height: 100%;
  .top {
    width: 100%;
    padding: 16px;
    .mark {
      color: #fff;
      position: relative;
      .rmark {
        letter-spacing: 3px;
      }
      .skip {
        position: absolute;
        top: 12px;
        right: -12px;
        background: #fff;
        border-radius: 6px;
        width: 75px;
        color: #474747;
        -webkit-transform: scale(0.9);
        transform: scale(0.9);
        padding: 5px;
        li {
          line-height: 26px;
        }
        span {
          display: inline-block;
        }
      }
    }
    .login {
      background: rgba(255, 255, 255, 0.8);
      margin-top: 8px;
      border-radius: 6px;
      height: 120px;
      .icon-wode {
        display: inline-block;
        margin-top: -20px;
        width: 65px;
        height: 65px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.9);
        line-height: 65px;
        font-size: 32px;
      }
      p {
        color: #000;
        margin-top: 3px;
        font-weight: 300;
      }
    }
  }
  .goodStatus {
    margin: -5px 16px 0 16px;
    border-radius: 6px;
    display: flex;
    justify-content: space-around;
    background: rgba(255, 255, 255, 0.9);
    height: 60px;
    align-items: center;
    .status {
      display: block;
      margin-top: 3px;
      -webkit-transform: scale(0.8);
      transform: scale(0.8);
    }
  }
  .server {
    margin: 10px 16px;
    border-radius: 6px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    background: rgba(255, 255, 255, 0.9);
    align-items: center;
    li {
      margin: 8px 15px;
    }
    .iconfont {
      font-size: 22px;
      color: #934d91;
    }
    .status {
      display: block;
      margin-top: 3px;
      -webkit-transform: scale(0.8);
      transform: scale(0.8);
    }
  }
}
</style>