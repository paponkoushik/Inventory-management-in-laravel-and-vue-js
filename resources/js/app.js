
require('./bootstrap');

import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//import routes
import {routes} from './routes';

//import user class

import User from './helper/user';
window.User = User;

//sweet alert start
import Swal from 'sweetalert2';
window.Swal = Swal;

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
});
window.Toast =  Toast;

//sweet alert end

const router = new VueRouter({
    routes,
    mode :'history'
})

const app = new Vue({
    el: '#app',
    router
});
