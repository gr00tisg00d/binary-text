<template>
	<!-- Skeleton loader / shimmer placeholder -->
	<div
		class="animate-pulse rounded-xl bg-surface-container-high"
		:class="[heightClass, props.class]"
	/>
</template>

<script setup>
const props = defineProps({
	height: { type: String, default: "h-12" },
	class: { type: String, default: "" },
});

import { computed } from "vue";
const heightClass = computed(() => props.height);
</script>
