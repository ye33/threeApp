<template>
    <div class="page">
        <mt-header title="时尚LOOK">
          <router-link to="/home" slot="left">
            <mt-button icon="back"></mt-button>
          </router-link>
        </mt-header>
        <div class="detail">
            <h2>{{title}}</h2>
            <p>{{subtitle}}</p>
            <img :src="imgurl" alt="" />
            <p>{{des}}</p>
            <img :src="imgurl2" alt="" />
        </div>
    </div>
</template>

<script type="text/javascript">
    export default {
        data(){
            return {
                resdata:{},
                title:'',
                subtitle:'',
                des:'',
                imgurl:'',
                imgurl2:''
            }
        },
        mounted(){
            console.log(this.$route);
            let fashionid=this.$route.params.fashionid;
            this.$axios.get("http://10.3.141.145:4008/fashion/detail?fashionid="+fashionid).then(res=>{
                this.subtitle=res.data.data.subTitle;
                this.title=res.data.data.title;
                this.des=res.data.data.content;
                this.imgurl=res.data.data.image;
                this.imgurl2=res.data.data.imgContent;
            })
        }
    }
</script>

<style lang="scss" scoped>
    .page{
        padding:10px;
        min-height:640px;
        padding:15px 15px;
    }
    .mint-header{
        position:fixed;
        top:0;
        left:0;
        font-size:16px;
        color:#fff;
        background:#934d91;
        width:100%;
        padding:0 0 0 20px;
    }
    .detail{
        margin-top:40px;
        width:100%;
        img{
            width:288px;
            margin:10px 0;
        }
        p,h2{
            line-height:20px;
        }
    }
</style>