import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
// const modules = require.context('./', true, /\.ts$/)
// let routess: Array<RouteRecordRaw> = []
// modules.keys().forEach(key => {
//     routess = routess.concat(modules(key).default)
// })

const routes: Array<RouteRecordRaw> = [
    // {
    //     path: '/Home',
    //     name: 'Home',
    //     component: Home
    // },
    {
        path: '/About',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/Test',
        name: 'Test',
        component: () => import('../views/Test.vue')
    },
    {
        path: '/Test2',
        name: 'Test2',
        component: () => import('../views/Test2.vue')
    },
    {
        path: '/AsyncShow',
        name: 'AsyncShow',
        component: () => import('../views/AsyncShow.vue')
    },
    {
        path: '/Suspense',
        name: 'Suspense',
        component: () => import('../views/Suspense.vue')
    },
    {
        path: '/Test3',
        name: 'Test3',
        component: () => import('../views/Test3.vue')
    }, {
        path: '/SetUp',
        name: 'SetUp',
        component: () => import('../views/setUp.vue')
    }, {
        path: '/TempReference',
        name: 'TempReference',
        component: () => import('../views/TempReference.vue')
    }, {
        path: '/Directive',
        name: 'Directive',
        component: () => import('../views/Directive.vue')
    }, {
        path: '/Test4',
        name: 'Test4',
        component: () => import('../views/Test4.vue')
    },
    {
        path: '/Test5',
        name: 'Test5',
        component: () => import('../views/Test5.vue')
    },
    {
        path: '/render',
        name: 'render',
        component: () => import('../views/render.vue')
    },
    {
        path: '/Mixin',
        name: 'Mixin',
        component: () => import('../views/Mixin.vue')
    },
    {
        path: '/ParentView',
        name: 'ParentView',
        component: () => import('../views/ParentView.vue')
    },
    {
        path: '/SlotA',
        name: 'SlotA',
        component: () => import('../views/SlotA.vue')
    },
    {
        path: '/UseComponent',
        name: 'UseComponent',
        component: () => import('../views/UseComponent.vue')
    },
    {
        path: '/ParentInstance',
        name: 'ParentInstance',
        component: () => import('../views/ParentInstance.vue')
    },
    {
        path: '/Watch',
        name: 'Watch',
        component: () => import('../views/Watch.vue')
    },
    {
        path: '/nextTick',
        name: 'nextTick',
        component: () => import('../views/nextTick.vue')
    },
    {
        path: '/vOn',
        name: 'vOn',
        component: () => import('../views/vOn.vue'),
        children: [

        ]
    },
    {
        path: '/Transition',
        name: 'Transition',
        component: () => import('../views/Transition.vue')
    },
    {
        path: '/CostomRef',
        name: 'CostomRef',
        meta: {
            title: 'CostomRef'
        },
        component: () => import('../views/CostomRef.vue')
    },
    {
        path: "/Router",
        name: 'Router',
        component: () => import('../views/Router.vue')
    },
    {
        path: "/",
        name: 'TypeScript',
        component: () => import('../views/TypeScript.vue')
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
