import { writable } from 'svelte/store';
import type { Task } from '../models';
import { browser } from '$app/environment';

// Initialize the store with an empty array by default
const initialTasks: any = [];

// Check if we are running in the browser and attempt to load the tasks from localStorage
const stored = browser ? localStorage.getItem('tasks') : null;

// Parse the stored JSON if available or use the initial tasks array
export const tasks = writable(stored ? JSON.parse(stored) : initialTasks);

// Subscribe to the store and update localStorage whenever the tasks change
if (browser) {
	tasks.subscribe((value) => {
		localStorage.setItem('tasks', JSON.stringify(value));
	});
}
