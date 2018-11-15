<template>
	<div class="comment-box">
		<h1>发表评论</h1>
		<hr>
		<textarea placeholder="说点什么吧！不超过120字" maxlength="120" v-model="post"></textarea>
		<mt-button type="primary" size="large" @click="postComment">确认发布</mt-button>
		<ul>
			<li v-for="(item,index) of commentList">
				<div class="head">
					<span>#{{ index + 1 }}：{{ item.user }}</span>
					<span>发表时间：{{ item.cmt_time | dateFormat('YYYY年MM月DD日') }}</span>
				</div>
				<div class="body">
					<p>{{ item.content }}</p>
				</div>
			</li>
		</ul>
		<mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
	</div>
</template>
<script>
	export default {
		props: ['id'],
		data(){
			return {
				pageIndex: 1,
				commentList:[],
				post:''
			}
		},
		methods: {
			getCommentById(){
				this.$http.get('src/newsContent/comment.json?id='+this.id+'&pageIndex='+this.pageIndex).then(result => {
					this.commentList = this.commentList.concat(result.body)
				}).catch(err => {
					console.log(err)
				})
			},
			getMore(){
				this.pageIndex++
				this.getCommentById()
			},
			postComment(){
				if(this.post.trim() == '') return
					this.commentList.unshift({user:'valias',cmt_time:Date.now(),content:this.post})
			}
		},
		created(){
			this.getCommentById()
		}
	}
</script>
<style lang="less" scoped>
	.comment-box {
		margin-top: 25px;
		h1 {
			font-size: 20px;
		}
		textarea {
			margin: 0;
			height: 80px;
		}
		ul {
			list-style: none;
			padding: 0 10px;
			li {
				padding: 5px 0 0 0;
			}
			.head {
				display: flex;
				justify-content: space-between;
				font-size: 14px;
				background-color: #e3e4e5;
			}
			.body {
				p {
					font-size: 16px;
					text-indent: 2em;
					margin: 5px 0 0 0;
				}
			}
		}
	}
	
	
</style>