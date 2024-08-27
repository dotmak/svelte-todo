<script>
	import { json } from '@sveltejs/kit';
	import ToDoItems from '../components/ToDoItems.svelte';
	import { tasks } from '../lib/store';
</script>

<div class="items-container">
	<ToDoItems />
</div>

<style>
	.items-container {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
</style>
