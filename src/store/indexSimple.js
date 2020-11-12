import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 1
    },

    getters: {

    },

    mutations: {
        increment(state, congThem) {
            state.count++;
            console.log('congThem:', congThem);
            if(congThem !== undefined) {
            state.count = state.count + congThem;
            }
        },
        decrement(state, truThem) {
            state.count--;
            if(truThem !== undefined) {
                state.count = state.count - truThem;
                }
        },
    },

    actions: {
        handleIncrement(context, congThem) {
            context.commit('increment', congThem)
        },
        handleDecrement(context, truThem) {
            context.commit('decrement', truThem)
        }
    }
});

export default store;

