// console.log("123");

import Vue from "vue"
// import Vue from "../node_modules/vue/dist/vue.js"
import App from './app.vue'
// import Router from 'vue-router'

import VueRouter from "vue-router"
Vue.use(VueRouter)


//导入bootstrap样式,图标要用
import 'bootstrap/dist/css/bootstrap.css'
import './css/app.css'


import router from './router.js'


//全局导入mint-ui,注册到vue上,这样子打包后的体积大一点
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.use(MintUI)

//按需导入mant-ui组件,这样子打包后的体积小一点
import {Button} from 'mint-ui'
//使用vue.component注册按钮组件
Vue.component(Button.name, Button)



var vm = new Vue({
    el:'#app',
    data:{
        msg:'213'
    },
    methods:{},
    render:c=>c(App),
    router
})