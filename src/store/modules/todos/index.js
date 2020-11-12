import state from './todos.state'
import mutations from './todos.mutations'
import actions from './todos.actions'
import getters from './todos.getters'

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}