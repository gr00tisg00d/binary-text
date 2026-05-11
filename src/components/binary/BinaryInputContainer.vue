<template>
	<!--
    The core binary-input area used in the chat interface.
    Emits 'send' with { binary, text, translatedText, language } when the user taps Send.
  -->
	<div
		class="border-t border-outline-variant bg-white"
		@keydown.enter.prevent="handleSend"
	>
		<!-- Translation row (collapsed when language === 'en') -->
		<div class="flex items-center gap-3 px-4 pt-3">
			<LanguageSelector v-model="selectedLanguage" />
			<TranslationDisplay
				:text="translatedText"
				:loading="translating"
				:source-text="decodedText"
			/>
		</div>

		<!-- Live decoded text output -->
		<div class="px-4 pt-2">
			<TextOutputDisplay :text="decodedText" />
		</div>

		<!-- Binary input display -->
		<div class="px-4 pt-2">
			<InputDisplay :bit-display="bitDisplay" :pending-bits="pendingBits" />
		</div>

		<!-- Buttons row -->
		<div class="flex items-center gap-3 px-4 py-4">
			<BinaryButton value="0" @press="onBit" />
			<BinaryButton value="1" @press="onBit" />

			<div class="flex-1" />

			<ActionButtons
				:disabled="!bits.length"
				:send-disabled="!decodedText"
				:sending="sending"
				@backspace="backspace"
				@clear="clear"
				@send="handleSend"
			/>
		</div>
	</div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useBinary } from "@/composables/useBinary";
import { translateText } from "@/services/translate";
import BinaryButton from "./BinaryButton.vue";
import InputDisplay from "./InputDisplay.vue";
import ActionButtons from "./ActionButtons.vue";
import TextOutputDisplay from "@/components/output/TextOutputDisplay.vue";
import TranslationDisplay from "@/components/output/TranslationDisplay.vue";
import LanguageSelector from "@/components/output/LanguageSelector.vue";

const emit = defineEmits(["send"]);

const {
	bits,
	decodedText,
	bitDisplay,
	pendingBits,
	binaryString,
	addBit,
	backspace,
	clear,
} = useBinary();

const selectedLanguage = ref("en");
const translatedText = ref("");
const translating = ref(false);
const sending = ref(false);

// Auto-translate whenever decoded text changes (debounced)
let translateTimer = null;
watch(decodedText, (val) => {
	clearTimeout(translateTimer);
	translatedText.value = "";
	if (!val || selectedLanguage.value === "en") return;

	translateTimer = setTimeout(async () => {
		translating.value = true;
		try {
			const result = await translateText(val, selectedLanguage.value);
			if (result) translatedText.value = result;
		} catch {
			// silently fail – translation is optional
		} finally {
			translating.value = false;
		}
	}, 600);
});

// Re-translate when language changes
watch(selectedLanguage, () => {
	translatedText.value = "";
	watch(decodedText, () => {}, { flush: "post" }); // trigger re-evaluate
	if (decodedText.value && selectedLanguage.value !== "en") {
		translateText(decodedText.value, selectedLanguage.value)
			.then((r) => {
				if (r) translatedText.value = r;
			})
			.catch(() => {});
	}
});

function onBit(val) {
	addBit(val);
}

async function handleSend() {
	if (!decodedText.value || sending.value) return;

	sending.value = true;
	try {
		emit("send", {
			binary: binaryString.value,
			text: decodedText.value,
			translatedText: translatedText.value || null,
			language: selectedLanguage.value,
		});
		clear();
		translatedText.value = "";
	} finally {
		sending.value = false;
	}
}
</script>
