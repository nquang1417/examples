<template>
    <div class="todo">
        <form @submit.prevent="addTodo(txt); txt = ''">
            <input type="checkbox" title="mark all" @change="markAllTodo(!markAll); markAll = !markAll" />
            <input type="text" v-model="txt" placeholder="What must be done?">
            <button> Add Todo </button>
        </form>
        <ul>
            <li v-for="(todo, index) in todos" :key="index">
                <input type="checkbox" title="mark todo" @change="markTodo(todo)" :checked="todo.completed">
                <span :class="{ completed: todo.completed }">{{ todo.text }}</span>
                <button @click="removeTodo(todo)">x</button>
            </li>
        </ul>
        <div>
            <a href="#" @click="clearCompleted()"> clear completed </a>
        </div>
        show:
        <button @click="visible = 'all'"> all </button>
        <button @click="visible = 'completed'"> completed </button>
        <button @click="visible = 'pending'"> pending </button>
    </div>
</template>

<script>
import store from '../store/store'
import { mapGetters, mapMutations } from 'vuex';

export default {
    name: 'TodoComp',
    data() {
        return {
            txt: '',
            visible: 'all',
            markAll: false
        }
    },
    computed: {
        todos() {
            return store.getters[this.visible]
        },
        ...mapGetters(['pending', 'completed', 'all'])
    },
    methods: mapMutations(['addTodo', 'removeTodo', 'markTodo', 'markAllTodo', 'clearCompleted'])
}

</script>

<style>
.todo {
    text-align: left;
    padding: 5px;
    margin: auto;
    transition: all 0.5s;
    max-width: 300px;
}

.todo form {
    padding-bottom: 10px;
    border-bottom: 1px solid #000;
}

.todo input[type=checkbox] {
    margin-right: 10px;
}

.todo ul {
    padding-left: 20px;
}

.todo ul li {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
}

.completed {
    color: #888;
    text-decoration: line-through;
}

.todo ul li>span {
    flex: 1;
    max-width: 250px;
}
</style>