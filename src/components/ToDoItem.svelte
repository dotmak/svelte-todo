<script lang="ts">
	import { tasks } from '../lib/store';
	import type { Task } from '../models';
	import { createEventDispatcher } from 'svelte';
	import ToDoActions from './ToDoActions.svelte';

	export let data: Task;
	export let isEditing: boolean = false;

	// Event dispatcher to notify the parent component of updates
	const dispatch = createEventDispatcher();

	function updateTask(updatedTask) {
		data.completed = !data.completed;

		tasks.update((items) => {
			return items.map((task) =>
				task.id === updatedTask.id ? { ...task, completed: updatedTask.completed } : task
			);
		});
	}
</script>

<div class="todo-item">
	<div class="info">
		<div class="number">{data.id}</div>
		<input type="checkbox" checked={data.completed} on:click={() => updateTask(data)} />
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		{#if isEditing}
			<!-- Editable div when in edit mode -->
			<!-- svelte-ignore a11y-autofocus -->
			<input type="text" bind:value={data.text} />
		{:else}
			<!-- Non-editable div when not in edit mode -->
			<div class="text">
				{data.text}
			</div>
		{/if}
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<!-- svelte-ignore a11y-click-events-have-key-events -->
	</div>

	<ToDoActions bind:task={data} bind:isEditing />
</div>

<style>
	.todo-item {
		display: flex;
		padding: 10px;
		border: 1px solid black;
		justify-content: space-between;
	}
	.info {
		display: flex;
		flex-direction: row;
		gap: 10px;
	}
</style>
