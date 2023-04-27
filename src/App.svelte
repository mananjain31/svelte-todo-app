<script>
  import AddTodo from "./components/AddTodo.svelte";
	import TodoList from "./components/TodoList.svelte";
	// const deleteTodo = e =>{ 
	// 	todos = todos.filter(todo => todo.id !== e.detail);
	// }

	// const addTodo = e => {
	// 	todos = [{id : Math.random(), text: e.detail, completed: false}, ...todos]
	// }
</script>

<main class="flex fc ic g-1">
	<AddTodo />
	<TodoList />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>