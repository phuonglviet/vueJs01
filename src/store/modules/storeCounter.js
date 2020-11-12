const storeCounter = {

    namespaced: true,
    
    state: {
        count: 1
    },

    mutations: {
        increment(state, congThem) {
            state.count++;
            if (congThem !== undefined) {
                state.count = state.count + congThem;
            }
        },
        decrement(state, truThem) {
            state.count--;
            if (truThem !== undefined) {
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
    },

    getters: {

    },
};

export default storeCounter;