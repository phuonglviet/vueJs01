export default {

    // namespaced: true,

    state: {
        flavor: ''
    },

    mutations: {
        change(state, flavor) {
            state.flavor = flavor;  
        },
    },

    actions: {
        handleChangeFlavor({ state, getters, commit }, selectValue) {
            commit('change', selectValue);
        },
    },

    getters: {
        flavor: state => state.flavor
    },
}