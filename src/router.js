import Vue from 'vue/dist/vue.esm.browser.js';
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
window.Vue = Vue;
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        }
    ]
})