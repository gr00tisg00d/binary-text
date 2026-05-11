<template>
	<div
		class="group flex items-start gap-4 px-6 py-4 hover:bg-surface-container-low transition-colors border-b border-outline-variant/50 last:border-0"
	>
		<!-- Sender avatar -->
		<div
			class="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center font-semibold text-sm text-on-primary bg-primary"
		>
			{{ initials }}
		</div>

		<!-- Content -->
		<div class="flex-1 min-w-0 space-y-1">
			<!-- Header row -->
			<div class="flex items-center justify-between gap-2">
				<span class="font-body-sm font-semibold text-on-surface truncate">{{
					item.senderName
				}}</span>
				<span
					class="font-label-caps text-label-caps text-outline flex-shrink-0"
					>{{ timestamp }}</span
				>
			</div>

			<!-- Decoded text -->
			<p class="font-body-base text-on-surface truncate">{{ item.text }}</p>

			<!-- Binary (collapsed, expandable) -->
			<button
				@click="expanded = !expanded"
				class="font-label-caps text-label-caps text-primary hover:underline uppercase flex items-center gap-1"
			>
				<span class="material-symbols-outlined text-[14px]">
					{{ expanded ? "expand_less" : "expand_more" }}
				</span>
				{{ expanded ? "Hide binary" : "Show binary" }}
			</button>

			<Transition name="expand">
				<div
					v-if="expanded"
					class="font-mono-input text-[13px] text-on-surface-variant bg-surface-container rounded-lg px-3 py-2 break-all leading-relaxed"
				>
					{{ item.binary }}
				</div>
			</Transition>

			<!-- Translation badge -->
			<div v-if="item.translatedText" class="flex items-center gap-1.5 mt-1">
				<span class="material-symbols-outlined text-[14px] text-secondary"
					>translate</span
				>
				<span class="font-body-sm text-secondary">{{
					item.translatedText
				}}</span>
				<span
					class="font-label-caps text-label-caps text-outline uppercase ml-1"
					>{{ item.language }}</span
				>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
	item: { type: Object, required: true },
});

const expanded = ref(false);

const initials = computed(() => {
	const name = props.item.senderName || "U";
	return name
		.split(" ")
		.map((w) => w[0])
		.join("")
		.slice(0, 2)
		.toUpperCase();
});

const timestamp = computed(() => {
	if (!props.item.timestamp) return "";
	const date =
		props.item.timestamp.toDate?.() ?? new Date(props.item.timestamp);
	return date.toLocaleString(undefined, {
		month: "short",
		day: "numeric",
		hour: "2-digit",
		minute: "2-digit",
	});
});
</script>

<style scoped>
.expand-enter-active,
.expand-leave-active {
	transition: all 0.2s ease;
}
.expand-enter-from,
.expand-leave-to {
	opacity: 0;
	max-height: 0;
	padding: 0;
}
</style>
