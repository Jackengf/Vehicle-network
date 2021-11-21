import Vue from 'vue'
import App from './App'
import uView from "uview-ui";
// http拦截器，此为需要加入的内容，如果不是写在common目录，请自行修改引入路径
import httpInterceptor from '@/common/js/http.interceptor.js'
Vue.use(uView);
Vue.use(httpInterceptor, app)
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})

app.$mount()
