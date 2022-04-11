import { createRouter, createWebHistory } from 'vue-router'
import Testing from '../services/testing'
import Home from '/src/components/Home.vue'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },

]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router