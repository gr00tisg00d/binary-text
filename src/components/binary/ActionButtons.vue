<template>
	<!-- Control buttons: backspace, clear, send -->
	<div class="flex items-center gap-2">
		<!-- Backspace -->
		<button
			@click="emit('backspace')"
			:disabled="editDisabled"
			title="Backspace (⌫)"
			class="p-3 rounded-xl border border-outline-variant bg-white text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-all active:scale-90 disabled:opacity-40 disabled:cursor-not-allowed"
		>
			<span class="material-symbols-outlined text-[22px]">backspace</span>
		</button>

		<!-- Clear -->
		<button
			@click="emit('clear')"
			:disabled="editDisabled"
			title="Clear all"
			class="p-3 rounded-xl border border-outline-variant bg-white text-on-surface-variant hover:bg-error-container hover:text-error transition-all active:scale-90 disabled:opacity-40 disabled:cursor-not-allowed"
		>
			<span class="material-symbols-outlined text-[22px]">delete_sweep</span>
		</button>

		<!-- Send -->
		<button
			@click="emit('send')"
			:disabled="!canSend"
			title="Send message (Enter)"
			class="flex items-center gap-2 px-5 py-3 rounded-xl bg-primary text-on-primary font-semibold shadow-md hover:bg-primary-container transition-all active:scale-90 disabled:opacity-40 disabled:cursor-not-allowed"
		>
			<span
				v-if="sending"
				class="material-symbols-outlined animate-spin text-[20px]"
				>sync</span
			>
			<template v-else>
				<span class="hidden sm:inline font-body-sm">Send</span>
				<span class="material-symbols-outlined text-[20px]">send</span>
			</template>
		</button>
	</div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
	disabled: { type: Boolean, default: false }, // no bits at all
	sendDisabled: { type: Boolean, default: false }, // no decoded text yet
	sending: { type: Boolean, default: false },
});

const emit = defineEmits(["backspace", "clear", "send"]);

const editDisabled = computed(() => props.disabled);
const canSend = computed(() => !props.sendDisabled && !props.sending);
</script>
