import Vue from 'vue/dist/vue.esm.browser.js';
window.Vue = Vue;
import router from './router';
// import store from './store';
// import App from "./App";
// store,
window.vm = new Vue({
    router,
    data() {
        return {
            msg: 'TEST MSG'
        }
    },
    el: "#app",
})