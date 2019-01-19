<template>
  <div class="detail">
    <p>
      <span class="iconfont icon-shouji"></span>
      <input type="text" v-model="tel" placeholder="手机号码" @blur="checktel">
    </p>
    <p>{{infor1}}</p>
    <p>
      <span class="iconfont icon-wode"></span>
      <input type="password" v-model="password" placeholder="密码以字母开头，6到18位" @blur="checkpsw">
    </p>
    <p>{{infor2}}</p>
    <input type="button" class="myBtn" value="注册" @click="goto">
  </div>
</template>

<script type="text/javascript">
import Cookie from '@/assets/Cookie';
export default {
  data() {
    return {
      tel: "",
      password: "",
      infor1: "",
      infor2: "",
      ok1: false,
      ok2: false
    };
  },
  methods: {
    checktel() {
      let reg = /^1[3-9]\d{9}$/;
      if (reg.test(this.tel)) {
        let postData = this.$qs.stringify({
          tel: this.tel,
          password: this.password
        });
        this.$axios
          .post("http://39.108.252.230:4008/register/check", postData)
          .then(res => {
            if (res.data.code == 1) {
              this.infor1 = "手机号已注册";
            } else {
              this.infor1 = "";
              this.ok1 = true;
            }
          });
      } else {
        this.infor1 = "手机号不符合规则";
      }
    },
    checkpsw() {
      let reg = /\w{6,18}$/;
      if (reg.test(this.password)) {
        this.ok2 = true;
        this.infor2 = "";
      } else {
        this.infor2 = "密码不符合规则";
      }
    },
    goto() {
      if (this.ok1 && this.ok2) {
        let postData = this.$qs.stringify({
          tel: this.tel,
          password: this.password
        });
        this.$axios
          .post("http://39.108.252.230:4008/register/add", postData)
          .then(res => {
            if (res.data.code == 0) {
              // console.log(res);
            } else {
              Cookie.set('tel',this.tel,{});
              this.$router.push({
                name: "home"
              });
            }
          });
      }
    }
  }
};
</script>