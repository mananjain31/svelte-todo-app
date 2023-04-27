<script>
  import AddTodo from "./components/AddTodo.svelte";
	import TodoList from "./components/TodoList.svelte";
	
	let todos = [
		{id: 0, text: "Learn Svelte", completed : false},
		{id: 1, text: "Learn Angular", completed : true}
	]

	const deleteTodo = e =>{ 
		todos = todos.filter(todo => todo.id !== e.detail);
	}

	const addTodo = e => {
		todos = [{id : Math.random(), text: e.detail, completed: false}, ...todos]
	}
</script>

<main class="flex fc ic g-1">
	<AddTodo on:add-todo={addTodo}/>
	<TodoList {todos} on:delete-todo={deleteTodo}/>
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