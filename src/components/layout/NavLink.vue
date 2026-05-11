<template>
	<RouterLink
		:to="to"
		class="font-sans text-sm font-medium tracking-tight pb-4 mt-4 transition-colors"
		:class="
			isActive
				? 'text-primary border-b-2 border-primary'
				: 'text-outline hover:text-primary'
		"
	>
		{{ label }}
	</RouterLink>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const props = defineProps({
	to: { type: String, required: true },
	label: { type: String, required: true },
});

const route = useRoute();
const isActive = computed(
	() => route.path.startsWith(props.to) && props.to !== "/",
);
</script>
