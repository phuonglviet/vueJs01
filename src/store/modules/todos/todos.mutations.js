import {
    TODO_FETCH,
    TODO_ADD,
    TODO_TOGGLE_STATUS,
    TODO_DELETE,
} from "@/store/mutation-types";

export default {

    [TODO_FETCH](state, todos) {
        return state.todos = todos
    },

    [TODO_ADD](state, todo) {
        return state.todos = [todo, ...state.todos]
    },

    [TODO_TOGGLE_STATUS](state, id) {
        return state.todos = state.todos.map((todo) => todo.id === id ? { ...todo, status: !todo.status } : todo)
    },

    [TODO_DELETE](state, id) {
        return state.todos = state.todos.filter((todo) => todo.id !== id)
    }
    
}