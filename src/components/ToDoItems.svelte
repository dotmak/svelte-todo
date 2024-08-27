<script lang="ts">
	import type { Task } from '../models';
	import ToDoItem from './ToDoItem.svelte';
	import { tasks } from '../lib/store';
	import AddToDo from './AddToDo.svelte';

	// function deleteItem(task: Task) {
	// 	$tasks = $tasks.filter((item) => item.id !== task.id);
	// }
</script>

{#if $tasks.length == 0}
	No Tasks found
{:else}
	{#each $tasks as task}
		<ToDoItem data={task} />
	{/each}
{/if}

<div class="add-new">
	<AddToDo />
</div>
