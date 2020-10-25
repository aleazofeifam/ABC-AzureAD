import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        drawer: false,
        items: [
            { text: 'Home', to: '/', icon: 'home' },
            { text: 'Learn', to: '/Topics', icon: 'toc' },
            { text: 'Implement', to: '/Implement', icon: 'check' },
            { text: 'Fix an issue', to: '/Troubleshoot', icon: 'rounded_corner' },
            { text: 'About', to: '/About', icon: 'bookmark' }

        ]
    },
    getters: {
        links: (state) => {
            return state.items
        }
    },
    mutations: {
        setDrawer: (state, payload) => (state.drawer = payload),
        toggleDrawer: state => (state.drawer = !state.drawer)
    },
    actions: {

    }
})