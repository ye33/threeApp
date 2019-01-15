<template>

	<div class="list">

<!-- <<<<<<< HEAD -->
        <mt-header title="商品列表">
        <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
         </router-link>
        </mt-header>
    
        <div class="listcategory">
        <ul class="list_l">
            <li v-for="(item,idx) in goodslist" :key="item.lid" :class="{'active':current==idx}"  :id="item.lid" @click="changeCid(idx,item.lid)">{{item.category}}</li>
       
        </ul> 
        <div class="list_r">
          
                <listcotton :goodslist="recommend" />
                 <!-- <router-view :data="recommend" /> -->
        </div>     
      </div>
        
</div>
<!-- =======
		<mt-header title="商品列表">
			<router-link to="/" slot="left">
				<mt-button icon="back">返回</mt-button>
			</router-link>
		</mt-header>

		<div class="listcategory">
			<ul class="list_l">
				<li v-for="(item,idx) in goodslist" :key="idx" :class="{'active':current==idx}" @click="changeCid(item.id)">{{item.category}}</li>
			</ul>
			<div class="list_r">

				<listcotton :goodslist="sendData" />
				<!- <router-view :data="recommend" /> -->
	<!-- 		</div>
		</div>

	</div> -->
<!-- >>>>>>> master --> 

</template>

<script type="text/javascript">
	import listcotton from './list/listcotton.vue';
	// import "./sass/listcotton.scss"

	// export default {
	// 	data() {
	// 		return {
	// 			recommend: [],
	// 			goodslist: [{
	// 				category: '棉类面料',
	// 				id: 0
	// 			}, {
	// 				category: '麻类面料',
	// 				id: 1
	// 			}, {
	// 				category: '人造纤维',
	// 				id: 2
	// 			}, {
	// 				category: '化纤面料',
	// 				id: 3
	// 			}, {
	// 				category: '毛纺面料',
	// 				id: 4
	// 			}, {
	// 				category: '混纺、交织类',
	// 				id: 5
	// 			}, {
	// 				category: '丝绸面料',
	// 				id: 6
	// 			}, {
	// 				category: '皮革',
	// 				id: 7
	// 			}, {
	// 				category: '面料用途',
	// 				id: 8
	// 			}, {
	// 				category: '纱线',
	// 				id: 9
	// 			}, {
	// 				category: '纺织辅料',
	// 				id: 10
	// 			}],
	// 			current: 0,
	// 			sendData: []
	// 		}
	// 	},


    export default{
        data(){
            return {
                 recommend:[],
                 goodslist:[
                    {
                        category:'棉类面料',
                        lid:1
                    },{
                        category:'麻类面料',
                        lid:2
                    },{
                        category:'人造纤维',
                        lid:3
                    },{
                        category:'化纤面料',
                        lid:4
                    },{
                        category:'毛纺面料',
                        lid:5
                    },{
                        category:'混纺、交织类',
                        lid:6
                    },{
                        category:'丝绸面料',
                        lid:7
                    },{
                        category:'皮革',
                        lid:8
                    },{
                        category:'面料用途',
                        lid:9
                    },{
                        category:'纱线',
                        lid:10
                    },{
                        category:'纺织辅料',
                        lid:11
                    }
                 ],
                 current:0,
                 sendData:[]
            }
        },

        components:{
            listcotton
        },
         methods:{
            
            changeCid(idx,lid){
                this.current=idx;
                // this.sendData=this.recommend[idx].data;
                this.$axios.get("http://39.108.252.230:4008/list?lid="+lid).then(res=>{
                let data=res.data;
                // console.log(data);
                this.recommend=data.data;
                // this.sendData=data[0].data;
                // console.log(data);
                // console.log("this.recommend",this.recommend);
            })  
           }
        },
         created(){
            this.$axios.get("http://39.108.252.230:4008/list?lid="+this.current+1).then(res=>{
                let data=res.data;
                // console.log(data);
                this.recommend=data.data;
                // this.sendData=data[0].data;

                // console.log(data);
                // console.log("this.recommend",this.recommend);
                // console.log("this.sendData",this.sendData);
            });
      
    }
 }
// =======
// 		components: {
// 			listcotton
// 		},
// 		methods: {
// 			goto(idx) {
// 				this.$router.push({
// 					path: '/list/' + idx
// 				});
// 				console.log({
// 					path: '/list/' + idx
// 				});
// 			},
// 			changeCid(cid) {
// 				this.current = cid;
// 				this.sendData = this.recommend[cid].data;
// 			}
// 		},
// 		created() {
// 			this.$axios.get("/dbapi/common/category/data.action?").then(res => {
// 				let data = res.data.response.list;
// 				this.recommend = data;
// 				this.sendData = data[0].data;
// 			});
// 		}

// 	}
// >>>>>>> master
</script>

<style type="text/css">

</style>