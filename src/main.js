import Vue from 'vue'
import App from './App.vue'

// 导入全局CSS样式
import'./assets/css/chushi.css'
// 导入路由
import VueRouter from 'vue-router'


//导入ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

// 0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)
Vue.use(VueRouter),
Vue.use(ElementUI)  //---调用
// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来
//const ctrl = { template: '<div>foo</div>' }
//const Bar = { template: '<div>bar</div>' }
import Hello from './components/Hello.vue'
import Czuo from './components/Czuo.vue'
import Down from './components/Down.vue'//因为创建了其它路由所以直接导入
import FindMusic from './components/FindMusic.vue'
import Friend from './components/Friend.vue'
import login from './components/login.vue'
import Musician from './components/Musician.vue'
import MyMusic from './components/MyMusic.vue'
import Store from './components/Store.vue'

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
  { path: '/Hello', component: Hello },
  { path: '/Czuo', component: Czuo },
  { path: '/Down', component: Down },
  { path: '/FindMusic', component: FindMusic },
  { path: '/Friend', component: Friend },
  { path: '/login', component: login },
  { path: '/Musician', component: Musician },
  { path: '/MyMusic', component: MyMusic },
  { path: '/Store', component: Store },
  {path:'/',redirect:'/FindMusic'} 
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
 routes // (缩写) 相当于 routes: routes
})//----因为main.js本生就挂载了路由

new Vue({
  render: h => h(App),
  router //挂载路由
}).$mount('#app')
