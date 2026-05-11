<template>
	<!-- Only visible when a non-English language is selected and there is source text -->
	<Transition name="fade">
		<div
			v-if="sourceText"
			class="flex items-center gap-2 rounded-xl px-3 py-2 text-body-sm border"
			:class="
				loading
					? 'bg-surface-container border-outline-variant text-on-surface-variant'
					: 'bg-secondary-fixed border-secondary/20 text-on-secondary-fixed'
			"
		>
			<!-- Spinner while translating -->
			<span
				v-if="loading"
				class="material-symbols-outlined text-[16px] animate-spin text-secondary"
				>sync</span
			>
			<span v-else class="material-symbols-outlined text-[16px] text-secondary"
				>translate</span
			>

			<span v-if="loading" class="italic text-on-surface-variant"
				>Translating…</span
			>
			<span v-else-if="text" class="font-medium">{{ text }}</span>
			<span v-else class="italic text-on-surface-variant"
				>Translation unavailable</span
			>
		</div>
	</Transition>
</template>

<script setup>
defineProps({
	text: { type: String, default: "" },
	loading: { type: Boolean, default: false },
	sourceText: { type: String, default: "" },
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.2s;
}
.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
