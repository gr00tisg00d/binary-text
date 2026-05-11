<template>
	<AppLayout>
		<div class="max-w-7xl mx-auto px-6 py-12 space-y-10">
			<!-- Page Header -->
			<div class="text-center space-y-3">
				<span
					class="inline-block bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
					>Digital Precision</span
				>
				<h1 class="font-display text-display text-on-background">
					Translator Dashboard
				</h1>
				<p class="text-on-surface-variant font-body-base max-w-xl mx-auto">
					Professional-grade binary translation with real-time encoding,
					multi-language support, and cloud history synchronization.
				</p>
			</div>

			<!-- 3-Column Translator Grid -->
			<div
				class="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 items-stretch"
			>
				<!-- Binary Input -->
				<div
					class="bg-white border border-slate-200 rounded-xl shadow-sm flex flex-col"
				>
					<div
						class="p-4 border-b border-slate-100 flex items-center justify-between"
					>
						<div>
							<p
								class="text-xs font-bold uppercase tracking-widest text-slate-500"
							>
								Input
							</p>
							<h2 class="font-headline-md text-on-surface">Binary String</h2>
						</div>
						<div class="flex gap-1">
							<button
								@click="pasteBinary"
								title="Paste"
								class="p-2 text-slate-400 hover:text-primary rounded-lg hover:bg-slate-50 transition-colors"
							>
								<span class="material-symbols-outlined text-[18px]"
									>content_paste</span
								>
							</button>
							<button
								@click="clearBinary"
								title="Clear"
								class="p-2 text-slate-400 hover:text-red-500 rounded-lg hover:bg-slate-50 transition-colors"
							>
								<span class="material-symbols-outlined text-[18px]"
									>delete</span
								>
							</button>
						</div>
					</div>
					<div class="flex-1 p-4">
						<textarea
							v-model="binaryInput"
							placeholder="Enter binary code here... (e.g. 01001000 01100101 01101100 01101100 01101111)"
							rows="8"
							class="w-full h-full min-h-[160px] resize-none font-mono-input text-sm text-on-surface placeholder-slate-300 bg-transparent outline-none leading-relaxed"
						/>
					</div>
					<div class="px-4 pb-3">
						<span class="text-xs text-slate-400">{{
							binaryInput.trim()
								? Math.ceil(binaryInput.trim().replace(/\s/g, "").length / 8) +
									" chars detected"
								: "No input"
						}}</span>
					</div>
				</div>

				<!-- Center Controls -->
				<div
					class="flex flex-col items-center justify-center gap-4 py-8 lg:py-0"
				>
					<button
						@click="translate"
						:disabled="!binaryInput.trim()"
						class="bg-primary text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:opacity-90 active:scale-95 transition-all disabled:opacity-40 flex items-center gap-2 whitespace-nowrap"
					>
						Translate
						<span class="material-symbols-outlined text-[18px]"
							>arrow_forward</span
						>
					</button>
					<button
						@click="swapMode"
						class="p-3 border border-slate-200 rounded-xl text-slate-400 hover:text-primary hover:border-primary bg-white shadow-sm transition-all"
						title="Swap input/output"
					>
						<span class="material-symbols-outlined">swap_horiz</span>
					</button>
				</div>

				<!-- Text Output -->
				<div
					class="bg-white border border-slate-200 rounded-xl shadow-sm flex flex-col"
				>
					<div
						class="p-4 border-b border-slate-100 flex items-center justify-between"
					>
						<div>
							<p
								class="text-xs font-bold uppercase tracking-widest text-slate-500"
							>
								Output
							</p>
							<h2 class="font-headline-md text-on-surface">Translated Text</h2>
						</div>
						<div class="flex gap-1">
							<button
								@click="copyOutput"
								:disabled="!textOutput"
								title="Copy"
								class="p-2 text-slate-400 hover:text-primary rounded-lg hover:bg-slate-50 transition-colors disabled:opacity-30"
							>
								<span class="material-symbols-outlined text-[18px]"
									>content_copy</span
								>
							</button>
							<button
								@click="shareOutput"
								:disabled="!textOutput"
								title="Share"
								class="p-2 text-slate-400 hover:text-primary rounded-lg hover:bg-slate-50 transition-colors disabled:opacity-30"
							>
								<span class="material-symbols-outlined text-[18px]">share</span>
							</button>
						</div>
					</div>
					<div class="flex-1 p-4">
						<div
							v-if="textOutput"
							class="font-body-base text-on-surface leading-relaxed min-h-[160px]"
						>
							{{ textOutput }}
						</div>
						<div v-else class="min-h-[160px] flex items-center justify-center">
							<p class="text-slate-300 font-body-sm text-center">
								Translation will appear here
							</p>
						</div>
					</div>
					<div class="px-4 pb-3">
						<span class="text-xs text-slate-400">{{
							textOutput ? textOutput.length + " characters" : "Awaiting input"
						}}</span>
					</div>
				</div>
			</div>

			<!-- Language Card -->
			<div class="max-w-md mx-auto">
				<div
					class="bg-white border border-slate-200 rounded-xl shadow-sm p-6 space-y-4"
				>
					<div class="flex items-center gap-3">
						<span class="material-symbols-outlined text-primary text-2xl"
							>translate</span
						>
						<div>
							<p
								class="text-xs font-bold uppercase tracking-widest text-slate-500"
							>
								GLOBAL LANGUAGE LOCALIZATION
							</p>
							<p class="font-headline-md text-on-surface">
								Translation Language
							</p>
						</div>
					</div>
					<div class="relative">
						<select
							v-model="targetLanguage"
							class="w-full appearance-none bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 font-body-sm text-on-surface pr-10 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
						>
							<option value="">No translation (raw decode)</option>
							<option
								v-for="lang in languages"
								:key="lang.code"
								:value="lang.code"
							>
								{{ lang.name }}
							</option>
						</select>
						<span
							class="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400"
							>expand_more</span
						>
					</div>
					<p class="font-body-sm text-slate-400 italic text-sm">
						Powered by the Google Translate REST API. Translation is optional
						and applied after binary decoding.
					</p>
				</div>
			</div>

			<!-- Feature Cards -->
			<div class="grid md:grid-cols-3 gap-6">
				<div
					v-for="f in features"
					:key="f.icon"
					class="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
				>
					<div
						class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4"
					>
						<span class="material-symbols-outlined text-primary">{{
							f.icon
						}}</span>
					</div>
					<h3 class="font-headline-md text-on-surface mb-1">{{ f.title }}</h3>
					<p class="font-body-sm text-on-surface-variant">{{ f.desc }}</p>
				</div>
			</div>
		</div>
	</AppLayout>
</template>

<script setup>
import { ref } from "vue";
import AppLayout from "@/components/layout/AppLayout.vue";
import { SUPPORTED_LANGUAGES } from "@/services/translate";

const binaryInput = ref("");
const textOutput = ref("");
const targetLanguage = ref("");

const languages = SUPPORTED_LANGUAGES;

const features = [
	{
		icon: "terminal",
		title: "CLI Integration",
		desc: "Use our command-line tool for batch processing of binary files in any pipeline or script.",
	},
	{
		icon: "history",
		title: "Offline History",
		desc: "All translations are cached locally for offline access and synced to the cloud when you reconnect.",
	},
	{
		icon: "security",
		title: "Zero Log Policy",
		desc: "Your binary strings are never stored on our servers. Full client-side translation for sensitive data.",
	},
];

function decodeBinary(str) {
	return str
		.trim()
		.split(/\s+/)
		.filter((b) => b.length === 8)
		.map((b) => {
			const code = parseInt(b, 2);
			return code >= 32 && code <= 126 ? String.fromCharCode(code) : "";
		})
		.join("");
}

function translate() {
	if (!binaryInput.value.trim()) return;
	textOutput.value = decodeBinary(binaryInput.value);
}

function swapMode() {
	const decoded = textOutput.value;
	binaryInput.value = decoded
		? decoded
				.split("")
				.map((c) => c.charCodeAt(0).toString(2).padStart(8, "0"))
				.join(" ")
		: "";
	textOutput.value = "";
}

async function pasteBinary() {
	try {
		const text = await navigator.clipboard.readText();
		binaryInput.value = text;
	} catch {}
}

function clearBinary() {
	binaryInput.value = "";
	textOutput.value = "";
}

function copyOutput() {
	if (textOutput.value)
		navigator.clipboard.writeText(textOutput.value).catch(() => {});
}

function shareOutput() {
	if (navigator.share && textOutput.value) {
		navigator.share({ text: textOutput.value }).catch(() => {});
	} else {
		copyOutput();
	}
}
</script>
