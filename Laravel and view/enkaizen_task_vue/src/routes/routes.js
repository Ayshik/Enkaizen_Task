import Home from '../components/Home.vue';
import Signup_admin from '../components/Signup_admin.vue';
import Signup_user from '../components/Signup_user.vue';
import Admin_panel from '../components/Admin/Admin_panel.vue';
import Login from '../components/Login.vue';




import {createWebHistory,createRouter} from 'vue-router'

const routes=[
    {
        name:'Home',
        path:'/',
        component:Home
    },

    

    {
        name:"Signup_admin", 
        path:'/Signup_admin',
        component:Signup_admin,
    },
    {
        name:"Signup_user", 
        path:'/Signup_user',
        component:Signup_user,
    },

    {
        name:"Admin_panel", 
        path:'/Admin_panel',
        component:Admin_panel,
    },
    {
        name:"Login", 
        path:'/Login',
        component:Login,
    },

];


const router=createRouter({
    history: createWebHistory(),
    routes
});

export default router;