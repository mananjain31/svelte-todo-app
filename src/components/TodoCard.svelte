<script>
  import {TodosStore} from "../store"
  import Card from "./Card.svelte";
  export let todo;

  const toggleChecked = () => 
    TodosStore.update(prev => 
      prev.map(prevTodo => prevTodo.id === todo.id ? {...prevTodo, completed : !prevTodo.completed} : prevTodo)
    )
    
  const deleteTodo = () => 
  TodosStore.update(prev => 
      prev.filter(prevTodo => prevTodo.id !== todo.id)
    );
    
</script>

<Card>
  <div class="todo flex jb ic">
    <span class={`${todo.completed ? "completed" : ""}`}>{todo.text}</span>
    <div class="action flex ic g-1">
      <button on:click={toggleChecked}>
        {todo.completed ? "Uncheck" : "Check"}
      </button> 
      <button on:click={deleteTodo}>
        Delete
      </button>
    </div>
  </div>
</Card>

<style>
  .action button {
    background: #404040;
    color: #eee;
    border: none;
    outline: none;
    padding: .3rem .4rem;
    margin: 0;
    cursor: pointer;
  }
  .completed { 
    text-decoration: line-through;
  }
  .todo span {
    padding: .3rem 0;
  }
  .todo:hover .action {
    display: inline-block;
  }
  .action { 
    display: none;
  }
  
</style>