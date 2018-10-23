//导入vue-router模块，需要生成路由对象
import VueRouter from 'vue-router'

//导入需要配置路由的组件
import home from '../maincomponents/Home.vue'
import member from '../maincomponents/Member.vue'
import cart from '../maincomponents/Cart.vue'
import search from '../maincomponents/Search.vue'

const router = new VueRouter({
	//配置路由规则
	routes: [
		{path: '/', component: home},
		{path: '/home', component: home},
		{path: '/member', component: member},
		{path: '/cart', component: cart},
		{path: '/search', component: search}
	],
	//配置路由高亮对应的类
	linkActiveClass: 'mui-active'
})
export default router