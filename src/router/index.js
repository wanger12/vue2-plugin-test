import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/index/index.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: Home,
    redirect: '/print',
    children: [
        {
            path: 'print',
            name: 'print',
            component: () =>
                import('@/views/vue-print-nb/vue-print-nb.vue')
        },
        {
            path: 'table-excel',
            name: 'table-excel',
            component: () =>
                import('@/views/table-excel/table-excel.vue')
        },
    ]

},

    // {
    //     path: '/table-excel',
    //     name: 'table-excel',
    //     component: () =>
    //         import('@/views/vue-plugin-hiprint/index.vue')
    // },
    // {
    //     path: '/table-excel',
    //     name: 'table-excel',
    //     component: () =>
    //         import('@/views/table-excel/table-excel.vue')
    // },
]

const router = new VueRouter({
    routes
})

export default router