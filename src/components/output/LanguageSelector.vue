<template>
	<div class="flex items-center gap-2">
		<span
			class="material-symbols-outlined text-[18px] text-secondary flex-shrink-0"
			>language</span
		>

		<div class="relative">
			<select
				:value="modelValue"
				@change="emit('update:modelValue', $event.target.value)"
				class="appearance-none bg-surface-container-low border border-outline-variant rounded-lg pl-3 pr-8 py-1.5 font-body-sm text-on-surface focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none cursor-pointer transition-all"
			>
				<option
					v-for="lang in SUPPORTED_LANGUAGES"
					:key="lang.code"
					:value="lang.code"
				>
					{{ lang.label }}
				</option>
			</select>
			<span
				class="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-[16px] text-on-surface-variant pointer-events-none"
			>
				expand_more
			</span>
		</div>
	</div>
</template>

<script setup>
import { SUPPORTED_LANGUAGES } from "@/services/translate";

defineProps({
	modelValue: { type: String, default: "en" },
});

const emit = defineEmits(["update:modelValue"]);
</script>
