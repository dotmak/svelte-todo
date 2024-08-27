<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { Task } from '../models';
	import { tasks } from '../lib/store';

	export let isEditing: boolean = false;
	export let task: Task;

	function deleteItem(tasks: Task) {
		$tasks = $tasks.filter((item: { id: number }) => item.id !== task.id);
	}

	function saveItem() {
		tasks.update((items) => {
			// Find the index of the task to be updated
			const index = items.findIndex((item) => item.id === task.id);
			if (index !== -1) {
				// Update the task text and other properties if necessary
				items[index] = { ...items[index], ...task };
			}
			return items;
		});
		isEditing = false; // Exit editing mode
	}
</script>

<div class="actions">
	{#if isEditing}
		<button on:click={saveItem}>Save</button> <!-- Call saveItem when Save button is clicked -->
	{:else}
		<button on:click={() => (isEditing = !isEditing)}>Edit</button>
	{/if}

	<!-- <button on:click={() => (isEditing = !isEditing)}>
		{#if isEditing}
			Save
		{:else}
			Edit
		{/if}
	</button> -->
	<button on:click={() => deleteItem(task.id)}>Delete</button>
</div>

<style>
	.actions {
		display: flex;
		flex-direction: row;
		gap: 12px;
	}
</style>
