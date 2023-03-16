import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var store = new Vuex.Store({
    // ...
    state: {
        todos: []
    },
    mutations: {
        addTodo({ todos }, text) {
            todos.push({
                text,
                completed: false
            })
        },
        markTodo({ todos }, todo) {
            todos[todos.indexOf(todo)].completed = !todo.completed
        },
    },
    getters: {
        all: state => state.todos,
        completed: state => state.todos.filters(todo => todo.completed),
        pending: state => state.todos.filters(todo => !todo.completed)
    }
})

export default store