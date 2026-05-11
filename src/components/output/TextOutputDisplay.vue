<template>
	<!-- Live decoded text display -->
	<div
		class="rounded-xl border-2 px-4 py-3 min-h-[52px] transition-all"
		:class="
			text
				? 'border-primary bg-white shadow-sm ring-4 ring-primary/10'
				: 'border-outline-variant bg-surface-container-low'
		"
	>
		<p
			v-if="text"
			class="font-mono-input text-mono-input text-on-surface break-words"
		>
			{{ text }}
		</p>
		<p v-else class="font-body-sm text-outline italic">
			Decoded text will appear here…
		</p>
	</div>
</template>

<script setup>
defineProps({
	text: { type: String, default: "" },
});
</script>
