
import Vue from 'vue'
import App from './component/App.vue'
import VueRouter from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

new Vue({
    el:"#app",
    render:createElement => createElement(App),
    router: VueRouter
})