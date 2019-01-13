<template>
  <div class="login" :style="bgCss">
        <div class="tab">
            <div class="tabs">
                <span :class="{'active':tab.name==current.name}" v-for="tab in tabs" @click="change(tab)">{{tab.btnName}}</span>
            </div>
            <keep-alive>
                <components :is="current.components"></components>
            </keep-alive>

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
import imgurl from '@/img/login_top.03e3aca.png';
import userLogin from './login/userLogin.vue';
import userReg from './login/userReg.vue';
export default {
  data() {
    return {
        imgurl,
        current:'',
        tabs:[{name:'userLogin',btnName:'登录',components:userLogin},
        {name:'userReg',btnName:'注册',components:userReg}]
    }
  },
  methods:{
    change(tab){this.current=tab;}
  },
  computed: {
    bgCss() {
      return {
        background: `url(${this.imgurl}) no-repeat`,
        backgroundSize: 'contain'
      }
    }
  },
  beforeMount(){this.current=this.tabs[0];}
}

</script>
<style lang="scss">
   .login{
    padding:30px 8px 0 8px;
    .tab{
        margin-top:50px;
        .tabs{
            height:50px;
            display:flex;
            justify-content: space-around;
            span{
                display:block;
                line-height:45px;
                color:#fff;
                width:50%;
                height:45px;
                background:transparent;
            }
            .active{
                border-radius:6px;
                color:#474747;
                background:#fff;
            }
        }
        .detail{
            padding:38px 16px 16px 16px;
            color:#934d91;
            background:#fff;
            margin-top:-10px;
            p{
                margin-bottom:18px;
                span{
                    display:inline-block;
                    margin-right:5px;
                }
                input{
                    border:0 none;
                    width:215px;
                    background:transparent;
                    border-bottom:1px solid #ccc;
                }
            }
            .myBtn{
                background:#934d91;
                margin-top:6px;
                width:100%;
                height:35px;
                line-height:35px;
                color:#fff;
                border-radius:16px;
            }
        }
        .others{
            background:#fff;
            padding:25px 16px 20px 16px;
            .loginWay{
                height:8px;
                border-bottom:1px solid #ccc;
                span{
                    display:inline-block;
                    background:#fff;
                    color:#999;
                    padding:0 6px;
                }
            }
            .loginIcon{
                margin-top:20px;
                .iconfont{
                    display:inline-block;
                    font-size:32px;
                    margin:0 20px;
                }
                .icon-zhifubao{
                    color:#09a;
                }
                .icon-weixin{
                    color::#439057;
                }
            }
        }
    }
   }
</style>
