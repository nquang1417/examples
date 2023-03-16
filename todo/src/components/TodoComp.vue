<template>
    <div class="todo">
        <form>
            <input type="text" placeholder="What must be done?">
            <button> Add Todo </button>
        </form>
        <ul>
            <li v-for="(todo, index) in todos" :key="index">
                <input type="checkbox" title="mark todo">
                <span :class="{completed: todo.completed}"></span>
                <button>x</button>
            </li>
        </ul>
        <div>
            <a href="#"> clear completed </a>
        </div>
        show:
        <button> all </button>
        <button> completed </button>
        <button> pending </button>
    </div>
</template>

<script>
import store from '../store'
import { mapGetters, mapMutations } from 'vuex';

export default {
    name: 'TodoComp',
    data() {
    },
    compute: {
        todos() {
            store.todos,
            mapGetters(['pending', 'completed', 'all'])
        }
    },
    methods: mapMutations(['addTodo'])
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
	.completed {
		color: #888;
		text-decoration: line-through;
	}
	li {
		display: flex;
		flex-wrap: wrap;
	}
	li>span {
		flex: 1;
		max-width: 250px;
	}
</style>