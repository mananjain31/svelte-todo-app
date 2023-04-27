<script>
  import {createEventDispatcher} from "svelte";

  const dispatch = createEventDispatcher();
  let value = "";
  const handleSubmit = () => {
    dispatch("add-todo", value)
    value = "";
  }
</script>

<form class="flex" on:submit|preventDefault={handleSubmit}>
  <input name="value" placeholder="Enter Todo Text" bind:value={value}/>
  <button disabled={value.length < 5}>Add</button>
</form>

<style>
  form {
    width: min(500px, 100%);
    border-radius: .5rem;
    overflow: hidden;
  }
  input { 
    width: 100%;
    flex: 1;
    margin: 0;
    outline: none;
  
  }
  button:disabled {
    background-color: gray;
    cursor: not-allowed;
  }
  button {
    margin: 0;
    background-color: black;
    color: white;
    border: none;
    cursor: pointer;
  }
</style>