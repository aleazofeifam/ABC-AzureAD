import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior() {
        return { x: 0, y: 0 };
    },
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '*',
            name: 'home',
            component: Home
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/About',
            name: 'About',
            component: () =>
                import ('./views/About.vue')
        },
        {
            path: '/Troubleshoot',
            name: 'Troubleshoot',
            component: () =>
                import ('./views/Team.vue')
        },
        {
            path: '/Topics',
            name: 'Topics',
            component: () =>
                import ('./views/Events.vue')
        },
        {
            path: '/contact',
            name: 'contact',
            component: () =>
                import ('./views/Contact.vue')
        },
        {
            path: '/Users',
            name: 'Users',
            component: () =>
                import ('./views/Post.vue')
        }
    ]
})