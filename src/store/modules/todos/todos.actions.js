// import 'es6-promise/auto'

import {
    TODO_FETCH,
    TODO_ADD,
    TODO_TOGGLE_STATUS,
    TODO_DELETE,
} from "@/store/mutation-types";

export default {

    // async actionTodoFetch({ commit }) {
    //     let response = await apiFetchTodos()

    //     if (response.status == 200) {
    //         return commit(TODO_FETCH, response.data)
    //     }
    // },

    // actionTodoFetch({ commit }) {
    actionTodoAdd({ commit }, todo) {
        // let response = await apiAddTodo(todo)

        // if (response.status == 200) {
        //     return commit(TODO_ADD, response.data)
        // }
        // console.log('actionTodoAdd is called');
        return commit(TODO_ADD, todo)
        // await commit(TODO_ADD, todo)

        // await dispatch("decreaseAsync", payload);

        // return Promise.resolve(commit(TODO_ADD, todo));
    },

    // async actionTodoChangeStatus({ commit }, { id, status }) {
    //     let response = await apiEditTodo(id, { status })

    //     if (response.status == 200) {
    //         return commit(TODO_TOGGLE_STATUS, id)
    //     }
    // },

    async actionTodoDelete({ commit }, id) {
        // let response = await apiDeleteTodo(id)

        // if (response.status == 200) {
        //     return commit(TODO_DELETE, id)
        // }

        return commit(TODO_DELETE, id)
    }

}