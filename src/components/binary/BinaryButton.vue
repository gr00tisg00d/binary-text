<template>
	<!--
    Large binary button ("0" or "1").
    Emits `press` when clicked or when the corresponding keyboard key is pressed.
  -->
	<button
		@click="emit('press', value)"
		:aria-label="`Input ${value}`"
		class="relative select-none w-24 h-24 md:w-28 md:h-28 rounded-2xl font-mono text-4xl md:text-5xl font-black shadow-lg transition-all duration-100 active:scale-90 active:shadow-md focus-visible:outline-none focus-visible:ring-4"
		:class="value === '0' ? zeroClasses : oneClasses"
	>
		{{ value }}

		<!-- Ripple ring on press -->
		<span
			v-if="ripple"
			class="absolute inset-0 rounded-2xl ring-4 ring-current opacity-30 animate-ping pointer-events-none"
		/>
	</button>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
	value: {
		type: String,
		required: true,
		validator: (v) => v === "0" || v === "1",
	},
});

const emit = defineEmits(["press"]);

const ripple = ref(false);

function triggerRipple() {
	ripple.value = true;
	setTimeout(() => {
		ripple.value = false;
	}, 400);
}

// Expose for parent key-listener use
defineExpose({ triggerRipple });

const zeroClasses = `
  bg-surface-container-high
  text-on-surface
  hover:bg-surface-container-highest
  focus-visible:ring-outline-variant
`;

const oneClasses = `
  bg-primary
  text-on-primary
  hover:bg-primary-container
  focus-visible:ring-primary/40
`;
</script>
