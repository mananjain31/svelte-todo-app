<script>
  import TodoCard from "./TodoCard.svelte";
  import {TodosStore} from "../store"
</script>

<div class="todo-list">
  {#each $TodosStore as todo}
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