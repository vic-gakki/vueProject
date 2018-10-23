//入口文件

//导入vue
import Vue from 'vue'

//导入mui
import '../lib/MUI/css/mui.css'

//导入mint-ui的header组件,并注册为全局组件，同时导入mint-ui的样式表
import {Header} from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.component(Header.name,Header)


//导入app组件，渲染到页面
import app from '../App.vue'
const vm = new Vue({
	el:'#app',
	data:{},
	render: h => h(app)
})


