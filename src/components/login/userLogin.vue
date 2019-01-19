<template>
  <div class="detail">
    <p>
      <span class="iconfont icon-shouji"></span>
      <input ref="form" type="text" v-model="tel" placeholder="手机号码">
    </p>
    <p>
      <span class="iconfont icon-wode"></span>
      <input type="password" v-model="password" placeholder="密码">
    </p>
    <p>{{infor}}</p>
    <input type="button" class="myBtn" value="登录" @click="goto">
  </div>
</template>
<script type="text/javascript">
import Cookie from '@/assets/Cookie';
export default {
  data() {
    return {
      tel: "",
      password: "",
      infor: ""
    };
  },
  methods: {
    goto() {
      let postData = this.$qs.stringify({
        tel: this.tel,
        password: this.password
      });

      this.$axios
        .post("http://39.108.252.230:4008/login", postData)
        .then(res => {
          if (res.data.code == 0) {
            this.infor = "您尚未注册";
          } else if (res.data.code == 2) {
            this.infor = "您输入的号码或密码有误";
          } else {
            Cookie.set('tel',this.tel,{});
            this.$router.push({
              name: "home"
            });
          }
        })
        .catch(error => {
          // console.log(error);
        });
    }
  },
  mounted(){
        this.$refs.form.focus();
  }
};
</script>
