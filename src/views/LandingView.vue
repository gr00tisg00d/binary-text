<template>
	<AppLayout>
		<main class="max-w-7xl mx-auto px-6 pt-16 pb-24">
			<!-- Hero Section -->
			<div class="grid lg:grid-cols-2 gap-12 items-center mb-24">
				<!-- Left: copy -->
				<div class="space-y-stack-md">
					<div
						class="inline-flex items-center bg-slate-100 rounded-full px-3 py-1 text-slate-600 text-label-caps uppercase font-bold tracking-widest mb-4"
					>
						<span
							class="material-symbols-outlined text-[14px] mr-1"
							style="font-variation-settings: &quot;FILL&quot; 1"
							>verified</span
						>
						Professional Grade
					</div>
					<h1
						class="font-display text-display lg:text-5xl lg:leading-tight text-on-background mb-stack-md"
					>
						Translate Binary to Text with
						<span class="text-primary">Global Precision</span>.
					</h1>
					<p
						class="font-body-base text-on-surface-variant max-w-xl text-lg leading-relaxed mb-8"
					>
						An ultra-fast, professional tool designed for digital craftsmanship.
						Encode and decode complex binary data strings with zero-latency and
						localized precision.
					</p>
					<div class="flex flex-wrap gap-4">
						<RouterLink
							to="/auth?tab=signup"
							class="bg-primary hover:bg-primary-container text-white font-headline-md px-8 py-3 rounded-xl shadow-md transition-all active:scale-95"
						>
							Get Started Free
						</RouterLink>
						<RouterLink
							to="/dashboard"
							class="bg-white border border-outline-variant text-on-surface font-headline-md px-8 py-3 rounded-xl hover:bg-surface-container-low transition-all active:scale-95"
						>
							View Documentation
						</RouterLink>
					</div>
				</div>

				<!-- Right: Interactive Demo Shell -->
				<div class="relative">
					<div
						class="bg-white border border-slate-200 rounded-xl shadow-xl p-6 relative overflow-hidden"
					>
						<div class="flex items-center gap-2 mb-4">
							<div class="w-3 h-3 rounded-full bg-red-400"></div>
							<div class="w-3 h-3 rounded-full bg-yellow-400"></div>
							<div class="w-3 h-3 rounded-full bg-green-400"></div>
							<span class="ml-auto font-label-caps text-slate-400"
								>LIVE PREVIEW</span
							>
						</div>
						<div class="space-y-4">
							<div class="space-y-1">
								<label class="font-label-caps text-slate-500 uppercase"
									>Binary Input</label
								>
								<div
									class="font-mono-input bg-slate-50 border border-slate-200 p-4 rounded-lg text-slate-700 break-all leading-relaxed"
								>
									01000010 01101001 01101110 01100001 01110010 01111001 01010011
									01111001 01101110 01100011
								</div>
							</div>
							<div class="flex justify-center py-2">
								<div class="bg-primary text-white p-2 rounded-full shadow-md">
									<span class="material-symbols-outlined block">swap_vert</span>
								</div>
							</div>
							<div class="space-y-1">
								<label class="font-label-caps text-slate-500 uppercase"
									>Text Output</label
								>
								<div
									class="font-headline-md bg-white border-2 border-primary p-4 rounded-lg text-primary shadow-sm ring-4 ring-primary/10"
								>
									BinarySync
								</div>
							</div>
						</div>
						<div class="mt-4 flex gap-2">
							<span
								class="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider"
								>UTF-8 Detected</span
							>
							<span
								class="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider"
								>0ms Latency</span
							>
						</div>
					</div>
					<div
						class="absolute -top-6 -right-6 w-32 h-32 bg-secondary-container/20 rounded-full blur-3xl -z-10"
					></div>
					<div
						class="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10"
					></div>
				</div>
			</div>

			<!-- Features Bento Grid -->
			<div class="grid md:grid-cols-3 gap-6 mb-24">
				<div
					v-for="f in features"
					:key="f.icon"
					class="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
				>
					<div class="text-primary mb-4">
						<span class="material-symbols-outlined text-4xl">{{ f.icon }}</span>
					</div>
					<h3 class="font-headline-md mb-2">{{ f.title }}</h3>
					<p class="font-body-sm text-on-surface-variant">{{ f.desc }}</p>
				</div>
			</div>

			<!-- Visual Illustration Section -->
			<div
				class="bg-inverse-surface rounded-2xl overflow-hidden p-8 md:p-16 flex flex-col md:flex-row items-center gap-12"
			>
				<div class="flex-1 space-y-6">
					<h2 class="font-display text-white text-3xl md:text-4xl">
						Engineered for Technical Accuracy
					</h2>
					<p class="text-slate-400 font-body-base">
						Whether you're debugging low-level code or studying digital logic,
						BinarySync provides the precision you need with support for multiple
						character encodings.
					</p>
					<ul class="space-y-3">
						<li
							v-for="b in bullets"
							:key="b"
							class="flex items-center text-slate-200 font-body-sm"
						>
							<span
								class="material-symbols-outlined text-primary mr-3 text-lg"
								style="font-variation-settings: &quot;FILL&quot; 1"
								>check_circle</span
							>
							{{ b }}
						</li>
					</ul>
				</div>
				<div class="flex-1 w-full max-w-md">
					<div
						class="aspect-square bg-slate-800 rounded-xl relative overflow-hidden group border border-slate-700"
					>
						<div
							class="absolute inset-0 bg-gradient-to-t from-inverse-surface via-transparent to-transparent"
						></div>
						<div class="absolute inset-0 flex items-center justify-center">
							<div
								class="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center border border-primary/50 backdrop-blur-sm"
							>
								<span
									class="material-symbols-outlined text-white text-3xl"
									style="font-variation-settings: &quot;FILL&quot; 1"
									>play_arrow</span
								>
							</div>
						</div>
						<div
							class="absolute inset-0 font-mono-input text-primary/20 text-xs break-all p-6 leading-loose select-none"
						>
							01000010 01101001 01101110 01100001 01110010 01111001 01010011
							01111001 01101110 01100011 01000010 01101001 01101110 01100001
							01110010 01111001 01010011 01111001 01101110 01100011
						</div>
					</div>
				</div>
			</div>
		</main>
	</AppLayout>
</template>

<script setup>
import AppLayout from "@/components/layout/AppLayout.vue";

const features = [
	{
		icon: "bolt",
		title: "Instant Conversion",
		desc: "Real-time processing as you type. No page reloads or delays in your workflow.",
	},
	{
		icon: "security",
		title: "Secure & Private",
		desc: "Client-side processing ensures your data never touches a server unless you want it to.",
	},
	{
		icon: "history",
		title: "Translation History",
		desc: "Cloud-sync your common translations across all devices with professional accounts.",
	},
];

const bullets = [
	"Support for ASCII, UTF-8, and UTF-16",
	"Zero-buffer large file processing",
	"Cross-platform cloud synchronization",
];
</script>
