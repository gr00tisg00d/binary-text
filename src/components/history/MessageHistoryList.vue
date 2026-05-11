<template>
	<!-- Scrollable list of past messages / translations -->
	<div class="flex flex-col gap-1">
		<!-- Loading skeletons -->
		<template v-if="loading">
			<Loader v-for="i in 5" :key="i" class="h-20" />
		</template>

		<!-- Empty state -->
		<div
			v-else-if="!items.length"
			class="flex flex-col items-center justify-center py-20 text-on-surface-variant gap-3"
		>
			<span class="material-symbols-outlined text-5xl opacity-30">history</span>
			<p class="font-body-base">No message history yet.</p>
		</div>

		<!-- Items -->
		<MessageHistoryItem
			v-else
			v-for="item in items"
			:key="item.id"
			:item="item"
		/>
	</div>
</template>

<script setup>
import MessageHistoryItem from "./MessageHistoryItem.vue";
import Loader from "@/components/feedback/Loader.vue";

defineProps({
	items: { type: Array, default: () => [] },
	loading: { type: Boolean, default: false },
});
</script>
