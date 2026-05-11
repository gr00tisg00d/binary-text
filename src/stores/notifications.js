import { defineStore } from "pinia";
import { ref } from "vue";

export const useNotificationsStore = defineStore("notifications", () => {
	const toasts = ref([]);
	let _nextId = 0;

	/**
	 * @param {string} message
	 * @param {'success'|'error'|'info'|'warning'} type
	 * @param {number} duration  ms before auto-dismiss
	 */
	function add(message, type = "info", duration = 3500) {
		const id = ++_nextId;
		toasts.value.push({ id, message, type });
		setTimeout(() => remove(id), duration);
	}

	function remove(id) {
		toasts.value = toasts.value.filter((t) => t.id !== id);
	}

	return { toasts, add, remove };
});
