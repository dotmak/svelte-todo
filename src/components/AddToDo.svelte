<script lang="ts">
	import { tasks } from '../lib/store';
	let newToDo = '';
	import type { Task } from '../models';

	function addItem(text: string, completed: boolean) {
		if (text.length >= 2) {
			const newTask: Task = {
				id: $tasks.length > 0 ? $tasks[$tasks.length - 1].id + 1 : 1,
				text: text,
				completed: completed || false
			};
			$tasks = [...$tasks, newTask];
			newToDo = ''; // Clear the input field after adding
		}
	}
</script>

<input
	bind:value={newToDo}
	type="text"
	placeholder="Add new to do item"
	on:keydown={(e) => e.key === 'Enter' && addItem(newToDo, false)}
/>
