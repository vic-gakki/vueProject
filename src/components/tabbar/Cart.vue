<template>
	<div class="cart-container">
		<!-- 如果购物车中没有商品则显示 -->
		<h2 v-if="cartList.length==0">购物车空空如也，快去逛逛吧~</h2>
		<!-- 购物车商品区域 -->
		<div class="mui-card" v-for="item of cartList" :key="item.id">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<!-- <mt-switch v-model="$store.getters.getSelectedState[item.id]" @change="selectedChange"></mt-switch> -->
						<div :class="['mui-switch','mui-switch-mini',item.isSelected?' mui-active':'']" @toggle="selectedChange" :data-id="item.id">
  						<div class="mui-switch-handle"></div>
						</div>
						<img :src="item.imgurl">
						<div class="info">
							<h1>{{item.title}}</h1>
							<p>
								<span class="price">&yen;{{item.price}}</span>
								<numbox :count="item.count" :id="item.id"></numbox>
								<a href="javascript:;" @click="delItem(item.id)">删除</a>
							</p>
						</div>
					</div>
				</div>
		</div>
		<!-- 商品结算区域 -->
		<div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner sum">
						<div class="total_price">
							<p>总计（不含运费）</p>
							<p>你已勾选<span>{{$store.getters.getTotalNumAndPrice['selectCount']}}</span>件，总价：&yen;<span>{{$store.getters.getTotalNumAndPrice['selectPrice']}}</span></p>
						</div>
						<mt-button type='danger'>去结算</mt-button>
					</div>
				</div>
			</div>
	</div>
</template>
<script>
	import mui from '../../lib/MUI/js/mui.min.js'
	import numbox from '../subcompo/cart_numbox.vue'
	export default {
		data(){
			return {
				cartList: []
			}
		},
		components:{
			numbox 
		},
		created(){
			this.cartList = this.$store.state.cart
		},
		mounted(){
			mui('.mui-switch')['switch']()
		},
		methods: {
			// 删除商品
			delItem(id){
				this.$store.commit('deleteGoods',id)
			},
			// 同步更新商品是否被修改选中
			selectedChange(e){
				var id = e.target.dataset.id
				var state = e.detail.isActive
				this.$store.commit('updateSelectedState',{id,state})
			}
		}
	}
</script>
<style lang="less">
	.cart-container {
		background-color: #F3F2F7;
		overflow: hidden;
		h2 {
			position: absolute;
		}
		.mui-card-content-inner {
			 display: flex;
			 align-items: center;
			 img {
			 	height: 100%;
			 }
			 .info{
			 	display: flex;
			 	flex-direction: column;
			 	justify-content: space-between;
			 }
			 h1 {
			 	font-size: 14px;
			 }
			 span {
			 	color: red;
			 }
			&.sum {
			 	display: flex;
			 	justify-content: space-between;
			 	align-items:center;
			 }
		}
	}
</style>