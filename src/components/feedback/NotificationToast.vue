<template>
	<!-- Fixed toast container – bottom right -->
	<Teleport to="body">
		<div
			class="fixed bottom-6 right-6 flex flex-col gap-2 z-[100] pointer-events-none"
		>
			<TransitionGroup name="toast">
				<div
					v-for="toast in notificationsStore.toasts"
					:key="toast.id"
					class="pointer-events-auto flex items-start gap-3 px-4 py-3 rounded-xl shadow-xl min-w-[260px] max-w-sm border"
					:class="toastClasses(toast.type)"
				>
					<span
						class="material-symbols-outlined text-[20px] flex-shrink-0"
						style="font-variation-settings: &quot;FILL&quot; 1"
					>
						{{ toastIcon(toast.type) }}
					</span>
					<p class="font-body-sm font-medium flex-1">{{ toast.message }}</p>
					<button
						@click="notificationsStore.remove(toast.id)"
						class="flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity"
					>
						<span class="material-symbols-outlined text-[18px]">close</span>
					</button>
				</div>
			</TransitionGroup>
		</div>
	</Teleport>
</template>

<script setup>
import { useNotificationsStore } from "@/stores/notifications";

const notificationsStore = useNotificationsStore();

function toastClasses(type) {
	return (
		{
			success: "bg-white border-green-200 text-green-900",
			error: "bg-white border-error-container text-error",
			warning: "bg-white border-tertiary-fixed text-tertiary",
			info: "bg-white border-secondary-fixed text-secondary",
		}[type] ?? "bg-white border-outline-variant text-on-surface"
	);
}

function toastIcon(type) {
	return (
		{
			success: "check_circle",
			error: "error",
			warning: "warning",
			info: "info",
		}[type] ?? "info"
	);
}
</script>

<style scoped>
.toast-enter-active {
	animation: toast-in 0.25s ease-out;
}
.toast-leave-active {
	animation: toast-out 0.2s ease-in forwards;
}

@keyframes toast-in {
	from {
		transform: translateY(12px) scale(0.96);
		opacity: 0;
	}
	to {
		transform: translateY(0) scale(1);
		opacity: 1;
	}
}
@keyframes toast-out {
	from {
		transform: translateY(0) scale(1);
		opacity: 1;
	}
	to {
		transform: translateY(8px) scale(0.96);
		opacity: 0;
	}
}
</style>
