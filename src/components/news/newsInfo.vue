<template>
	<div class="news-detail">
		<div class="news-head">
			<h1>{{newsDetail.title}}</h1>
			<p>
				<span>发布时间：{{newsDetail.add_time}}</span>
				<span>点击量：{{newsDetail.clicked}}次</span>
			</p>
		</div>
		<hr>
		<div class="news-body" v-html="content"></div>
		<comment :id="id"></comment>
	</div>
</template>
<script>
	import {Toast} from 'mint-ui'
	import comment from '../subcompo/comment.vue'
	export default {
		data(){
			return {
				id:this.$route.params.id,
				newsDetail:{},
				content:''
			}
		},
		methods: {
			getNewsDetail(){
				this.$http.get('src/testData.json').then(result => {
					const arr = result.body
					this.newsDetail = arr.find(item => {
						return item.id == this.id
					})
					return this.$http.get('src/newsContent/content'+this.id%2+'.txt')
				}).then(result => {
					this.content = result.body
				}).catch(err => {
					Toast('加载详情失败')
				})
			}
		},
		created(){
			console.log('...')
			this.getNewsDetail()
		},
		components:{
			comment
		}
	}
</script>

<style lang="less">
	.news-detail {
		padding: 5px;	
		.news-head{
			text-align: center;
			h1 {
				font-size: 24px;
				color: red;
			}
			p {
				display: flex;
				justify-content: space-between;
			}
		}
		hr {
			font-size: 5px;
		}
		.news-body {
			img {
				width: 100%;
			}
		}
	}
</style>