<template>
	<div class="news-list">
		<ul class="mui-table-view">
			<li class="mui-table-view-cell mui-media" v-for="item of newsList" :key="item.id">
				<router-link :to="'/home/newsInfo/'+item.id">
					<img class="mui-media-object mui-pull-left" :src="item.imgUrl">
					<div class="mui-media-body">
						<h1>{{item.title}}</h1>
						<p class='mui-ellipsis'>
							<span>发表日期：{{item.add_time | dateFormat('DD/MM/YYYY HH:mm:ss')}}</span>
							<span>点击：{{item.clicked}}次</span>
						</p>
					</div>
				</router-link>
			</li>
		</ul>
	</div>
</template>
<script>
	import {Toast} from 'mint-ui'
	export default {
		data(){
			return{
				newsList: []
			}
		},
		created(){
			console.log('news component created')
			this.getNewsList()
		},
		methods: {
			getNewsList(){
				this.$http.get('src/testData.json').then(result => {
					this.newsList = result.body
				}).catch(err => {
					Toast('加载信息失败！请稍后再试')
				})
			}
		}
	}
</script>
<style lang="less" scoped>
	.news-list {
		h1 {
			font-size: 14px;
		}
		.mui-ellipsis {
			font-size: 12px;
			display: flex;
			justify-content: space-between;
			color: lightblue;
		}
	}
</style>