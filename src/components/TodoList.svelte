<script>
  import TodoCard from "./TodoCard.svelte";

  export let todos;
</script>

<div class="todo-list">
  {#each todos as todo}
    <TodoCard {todo} on:delete-todo/>
  {/each}
</div>

<style>
   .todo-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 100%;
}
</style>