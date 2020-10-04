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
                import ('./views/Troubleshooting.vue')
        },
        {
            path: '/Topics',
            name: 'Topics',
            component: () =>
                import ('./views/Topics.vue')
        },
        {
            path: '/contact',
            name: 'contact',
            component: () =>
                import ('./views/Contact.vue')
        },
        {
            path: '/Provisioning/AADConnect/LearnMore',
            name: 'AAD Connect',
            component: () =>
                import ('./components/TopicList/Provisioning/AADConnect/LearnMore.vue')
        },
        {
            path: '/Provisioning/AADConnect/Troubleshooting',
            name: 'AAD Connect Troubleshooting',
            component: () =>
                import ('./components/TopicList/Provisioning/AADConnect/Troubleshooting.vue')
        },
        {
            path: '/Provisioning/AADConnect/Management',
            name: 'AAD Connect For IT Admins',
            component: () =>
                import ('./components/TopicList/Provisioning/AADConnect/ForITAdmins.vue')
        },


        {
            path: '/Provisioning/SyncFabric/LearnMore',
            name: 'Sync Fabric',
            component: () =>
                import ('./components/TopicList/Provisioning/SyncFabric/LearnMore.vue')
        }


    ]
})