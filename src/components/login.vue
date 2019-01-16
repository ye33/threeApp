<template>
  <div class="login" :style="bgCss">
    <mt-header>
      <router-link to="/mine" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <div class="tab">
      <div class="tabs">
        <span
          :class="{'active':tab.name==current.name}"
          v-for="tab in tabs"
          @click="change(tab)"
        >{{tab.btnName}}</span>
      </div>
      <keep-alive>
        <components :is="current.components" v-show="noCookie"></components>
      </keep-alive>
      <!-- <p v-show="!noCookie">欢迎您！{{hasCookie}}</p> -->
      <div class="others">
        <p class="loginWay">
          <span>其他方式登录</span>
        </p>
        <p class="loginIcon">
          <span class="iconfont icon-zhifubao"></span>
          <span class="iconfont icon-weixin"></span>
        </p>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import imgurl from "@/img/login_top.03e3aca.png";
import userLogin from "./login/userLogin.vue";
import userReg from "./login/userReg.vue";
export default {
  data() {
    return {
      imgurl,
      current: "",
      noCookie: true,
      hasCookie: false,
      tabs: [
        {
          name: "userLogin",
          btnName: "登录",
          components: userLogin
        },
        {
          name: "userReg",
          btnName: "注册",
          components: userReg
        }
      ]
    };
  },
  methods: {
    change(tab) {
      this.current = tab;
    }
  },
  computed: {
    bgCss() {
      return {
        background: `url(${this.imgurl}) no-repeat`,
        backgroundSize: "contain"
      };
    }
  },
  beforeMount() {
    this.current = this.tabs[0];
    // if(document.cookie('tel')){
    // 	this.noCookie=false;
    // }
  },
  mounted() {
    // console.log(document.cookie('tel'));
    // if(document.cookie('tel')){
    // 	this.hasCookie=true;
    // }
  }
};
</script>
<style lang="scss">
.login {
  font-size:14px;
  padding: 30px 8px 0 8px;
  .mint-header {
    position: fixed;
    top: 0;
    left: 0;
    font-size: 16px;
    color: #fff;
    padding: 20px 0 0 15px;
    background: transparent;
  }
  .tab {
    margin-top: 50px;
    .tabs {
      height: 50px;
      display: flex;
      justify-content: space-around;
      span {
        display: block;
        line-height: 45px;
        color: #fff;
        width: 50%;
        height: 45px;
        background: transparent;
      }
      .active {
        border-radius: 6px;
        color: #474747;
        background: #fff;
      }
    }
    .detail {
      padding: 38px 16px 16px 16px;
      color: #934d91;
      background: #fff;
      margin-top: -10px;
      p {
        margin-bottom: 18px;
        span {
          display: inline-block;
          margin-right: 5px;
        }
        input {
          border: 0 none;
          width: 215px;
          background: transparent;
          border-bottom: 1px solid #ccc;
        }
      }
      .myBtn {
        background: #934d91;
        margin-top: 6px;
        width: 100%;
        height: 35px;
        line-height: 35px;
        color: #fff;
        border-radius: 16px;
      }
    }
    .others {
      background: #fff;
      padding: 25px 16px 20px 16px;
      .loginWay {
        height: 8px;
        border-bottom: 1px solid #ccc;
        span {
          display: inline-block;
          background: #fff;
          color: #999;
          padding: 0 6px;
        }
      }
      .loginIcon {
        margin-top: 20px;
        .iconfont {
          display: inline-block;
          font-size: 32px;
          margin: 0 20px;
        }
        .icon-zhifubao {
          color: #09a;
        }
        .icon-weixin {
          color: #439057;
        }
      }
    }
  }
}
</style>