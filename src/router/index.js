import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import routes from "./route";

const router =  createRouter({
    routes,
    history: createWebHistory(),
    //linkActiveClass: 'active'
})

router.beforeEach((to, from)=>{
    if(to.meta.auth){
        return {
            name: "login",
            query:{
                redirect:to.fullPath,
            }
        };
    } 
})

export default router