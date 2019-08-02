/* Auth routes starts*/
let login = require('./components/auth/login.vue').default;
let register = require('./components/auth/register.vue').default;
let forget = require('./components/auth/forget.vue').default;
let logout = require('./components/auth/logout.vue').default;
/* Auth route end*/

/*Employee route*/
let storeemployee = require('./components/employee/CreateEmployee.vue').default;
let employee = require('./components/employee/EmployeeList.vue').default;

let home = require('./components/home.vue').default;

export const routes = [
    { path: '/', component: login, name:'login' },
    { path: '/register', component: register, name:'register' },
    { path: '/forget', component: forget, name:'forget' },
    { path: '/logout', component: logout , name:'logout' },
    { path: '/store-employee', component: storeemployee , name:'store-employee' },
    { path: '/employee', component: employee , name:'employee' },
    { path: '/home', component: home , name:'home' },
];