<template>
	<div class="app-container">
		<!-- header部分 -->
		<mt-header fixed title="Gakkiの写真屋">
			 <span slot="left" @click="back">
		    <mt-button icon="back">返回</mt-button>
		  </span>
		</mt-header>

		<!-- 路由留坑 并设置动画效果-->
		<transition>
			<router-view></router-view>
		</transition>

		<!-- tabbar部分-->
		<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item1" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/cart">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span id="badge" class="mui-badge">{{$store.getters.totalItem}}</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
		
	</div>
</template>
<script>
	export default {
		data(){
			return {

			}
		},
		methods:{
			back(){
				this.$router.go(-1)
			}	
		}
	}
</script>
<style lang="less" scoped>
	.app-container {
		padding-top: 40px;
		padding-bottom: 50px;
		touch-action:pan-y;
		header {
			z-index: 9;
		}
	}
	.v-enter {
		opacity: 0;
		transform: translateX(100%);
	}
	.v-leave-to {
		opacity: 0;
		transform: translateX(-100%);
	}
	.v-enter-active {
		transition: all 0.4s ease;		
	}
	.v-leave-active {
		transition: all 0.4s ease;
		position: absolute;
	}
	.mui-bar-tab .mui-tab-item1 {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
  }
   .mui-bar-tab .mui-tab-item1 .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
	}
	.mui-bar-tab .mui-tab-item1 .mui-icon ~ .mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
	}
</style>