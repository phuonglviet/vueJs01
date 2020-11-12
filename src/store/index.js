import Vue from 'vue'
import Vuex from 'vuex'
import storeCounter from './modules/storeCounter'
import storeFlavor from './modules/storeFlavor'
import storeTodos from './modules/todos'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        storeCounter,
        storeFlavor,
        storeTodos
    },

    state: { // = data

    },

    getters: { // = computed properties

    },

    actions: {

    },

    mutations: {

    }
});
