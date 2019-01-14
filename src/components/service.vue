<template>
	<div class="page">
		<mt-header title="购物车">
			<router-link to="/" slot="left">
				<mt-button icon="back">返回</mt-button>
			</router-link>

			<mt-button slot="right">编辑</mt-button>
		</mt-header>

		<ul>
			<li class="shoppingcar" v-for="(item,idx) in carlist" :key="item.id" :idx="idx" @click="selectItem(!item.selected,idx)">
				<div class="shoppingcar_t">
					<input type="checkbox" :checked="item.selected" />
					<img :src="item.imgurl" alt="" />
					<span>{{item.name}}</span>
				</div>

				<div class="shoppingcar_b">
					<div class="left">
						<h3>色号：7#</h3>
						<p>￥{{item.price}}<span>/米  </span></p>
					</div>
					<div class="right">
						<!-- 购物车的加减          -->
						<span class="mark" @click.stop="numDecrease(idx)">-</span>
						<input type="text" v-model="item.number" step="0.1" min="1" class="cacul" @input="updatatotal()" /><span class="mark" @click.stop="numAdd(idx)">+</span>
					</div>
				</div>
				<Button class="btn-outline-danger" @click.stop="removeItem(idx)">删除</Button>
			</li>
		</ul>

		<ul class="carbottom">
			<li> <input type="checkbox" v-model="checkAll" /></li>
			<li>全选</li>
			<li>
				<h3>总价：<span>￥{{updatatotal}}</span></h3>
				<p>共1种1.0米</p>
			</li>
			<li>结算</li>
		</ul>

	</div>

</template>

<script type="text/javascript">
	import "../sass/shoppingcar.scss"
	export default {
		data() {
			return {
				goods: {
					number: 1
				},

				carlist: [{
					imgurl: "http://pic32.photophoto.cn/20140708/0021033813230990_b.jpg",
					name: "亚麻布料简约休闲西装裤子服装面料棉麻纯色桌布抱枕家纺麻布",
					price: 42,
					number: 1,
					id: parseInt(Math.random() * 1000 + 1),
					selected: false //是否选中    
				}, {
					imgurl: "http://pic32.photophoto.cn/20140708/0021033813230990_b.jpg",
					name: "亚麻布料简约休闲西装裤子服装面料棉麻纯色桌布抱枕家纺麻布",
					price: 42,
					number: 1,
					id: parseInt(Math.random() * 1000 + 1),
					selected: false //是否选中  
				}],

				sumPrice: 0, //合计金额
				totalNumber: 0 //总数

			}
		},

		computed: {
			checkAll: {
				get() {
					return this.carlist.every(item => item.selected)
				},
				set(checked) {
					this.carlist.forEach(item => {
						item.selected = checked;
					});
				}
			},
			//计算总金额总数量
			updatatotal() {

				//遍历整个数组如果有状态等于true 的  id或者idx的价格乘以数量 推进数组里面  然后再次遍历所有项 相加
				//
				console.log(123)
				var newArr = [];
				let total = 0;
				let qty = 0;
				this.carlist.forEach((item) => {
					if(item.selected) {
						qty++;
						total += item.price * item.number;

						newArr.push(total)
					}
				});
				this.totalNumber = qty;

				return total.toFixed(2);

			}
		},

		methods: {
			numDecrease(idx) {

				this.carlist[idx].number = (this.carlist[idx].number * 10 - 1) / 10
				console.log(this.carlist[idx].number)
			},
			numAdd(idx) {
				this.carlist[idx].number = (this.carlist[idx].number * 10 + 1) / 10
				console.log(this.carlist[idx].number)
			},
			removeItem(idx) {
				this.carlist.splice(idx, 1);
			},

			// 修改selected属性（选中或不选）
			selectItem(checked, idx) {
				// 全部操作
				if(idx === undefined) {

					this.carlist.forEach(item => {
						item.selected = checked;
					});
				}

				// 单个操作
				else {
					this.carlist[idx].selected = checked;
				}
			}
		},

	}
</script>