<template>
	<div class="listcotton">

		<!-- <h2><i>◆</i>主要分类</h2> -->
		<div v-for="item in goodslist" :id="item.idx">

			<p><i>◆</i>{{item.name}}</p>
			<ul>
				<li v-for="content in item.data">{{content.name}}</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default {
		props: {
			goodslist: {
				type: Array
			}
		},
		data() {
			return {
				datalist: []
			}
		}
	}
</script>

<style lang="scss">
	.listcotton {
		height: 100%;
		div {
			width: 242px;
			overflow: hidden;
			p {
				width: 242px;
				height: 26px;
				text-align: left;
				font-size: 12px;
				color: #444444;
				line-height: 28px;
				padding-left: 10px;
				color: red;
				i {
					color: #FCB859;
				}
			}
			ul {
				width: 242px;
				li {
					width: 80px;
					height: 30px;
					float: left;
				}
			}
		}
	}
</style>