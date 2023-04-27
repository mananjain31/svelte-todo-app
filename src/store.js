import { writable } from "svelte/store";

export const TodosStore = writable([
  {id: 0, text: "Learn Svelte", completed : false},
  {id: 1, text: "Learn Angular", completed : true}
]);