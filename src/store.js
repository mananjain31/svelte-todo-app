import { writable } from "svelte/store";

export const TodosStore = writable(JSON.parse(localStorage.getItem("todos")) || []);

TodosStore.subscribe(data => localStorage.todos = JSON.stringify(data))