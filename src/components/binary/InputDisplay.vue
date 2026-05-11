<template>
	<!--
    Displays the current binary sequence being typed.
    Completed bytes are shown in normal weight; the pending byte is dimmer.
  -->
	<div
		class="rounded-xl bg-surface-container-low border border-outline-variant px-4 py-3 min-h-[60px] flex flex-col gap-1"
	>
		<!-- Binary bits -->
		<div class="font-mono-input text-mono-input leading-relaxed">
			<span v-if="!bitDisplay && !pendingBits" class="text-outline">
				Press <span class="font-semibold text-primary">0</span> or
				<span class="font-semibold text-primary">1</span> to begin…
			</span>
			<template v-else>
				<span class="inline-flex flex-wrap gap-x-2 gap-y-0.5 items-baseline">
					<!-- Completed bytes -->
					<span
						v-for="(group, i) in completedGroups"
						:key="i"
						class="text-on-surface"
						>{{ group }}</span
					>
					<!-- Pending (incomplete) byte -->
					<span v-if="pendingBits" class="text-on-surface-variant opacity-60">{{
						pendingBits
					}}</span>
					<!-- Blinking cursor -->
					<span
						class="inline-block w-0.5 h-4 bg-primary animate-pulse align-middle"
					/>
				</span>
			</template>
		</div>

		<!-- Bit counter -->
		<div class="flex items-center justify-between">
			<span class="font-label-caps text-label-caps text-outline uppercase">
				{{ totalBits }} bit{{ totalBits !== 1 ? "s" : "" }} ·
				{{ completedBytes }} byte{{ completedBytes !== 1 ? "s" : "" }}
			</span>
			<span
				v-if="pendingBits"
				class="font-label-caps text-label-caps text-primary uppercase"
			>
				{{ 8 - pendingBits.length }} more to decode
			</span>
		</div>
	</div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
	bitDisplay: { type: String, default: "" }, // e.g. "01001000 01100101"
	pendingBits: { type: String, default: "" }, // e.g. "010"
});

const completedGroups = computed(() =>
	props.bitDisplay ? props.bitDisplay.split(" ").filter(Boolean) : [],
);

const totalBits = computed(
	() => completedGroups.value.join("").length + props.pendingBits.length,
);
const completedBytes = computed(() => completedGroups.value.length);
</script>
