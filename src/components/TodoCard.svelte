<script>
  import {createEventDispatcher} from "svelte"
  import Card from "./Card.svelte";
  export let todo;

  const dispatch = createEventDispatcher()

  const toggleChecked = () => 
    todo.completed = !todo.completed;
    
  const deleteTodo = () => 
    dispatch("delete-todo", todo.id);
    
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