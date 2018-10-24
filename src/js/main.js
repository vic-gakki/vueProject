//入口文件

//1.导入vue
import Vue from 'vue'

//2.1导入mui样式表
import '../lib/MUI/css/mui.css'

//2.2导入MUI扩展的图标样式表(依赖字体图标，需要手动引入到项目中)
import '../lib/MUI/css/icons-extra.css'

//3.导入mint-ui的需要的组件,并注册为全局组件，同时导入mint-ui的样式表
import {Header,Swipe,SwipeItem,Button} from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.component(Header.name,Header)
Vue.component(Swipe.name,Swipe)
Vue.component(SwipeItem.name,SwipeItem)
Vue.component(Button.name,Button)

//4. 导入vue-router,并注册为全局组件
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//5. 导入路由入口文件
import router from './router.js'

//6. 定义全局的过滤器,需要使用时间处理插件moment，导入该模块
import moment from 'moment'
Vue.filter('dateFormat',(dataStr,pattern='YYYY-MM-DD HH:mm:ss')=>{
	return moment(dataStr).format(pattern)
})


//7. 导入vue-resource组件,注册为全局，并配置相关信息
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.root = 'http://localhost:8080'


//导入app组件，渲染到页面
import app from '../App.vue'
const vm = new Vue({
	el:'#app',
	data:{},
	render: h => h(app),
	router
})


