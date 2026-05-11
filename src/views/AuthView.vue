<template>
	<!-- Full-screen split layout — no AppLayout wrapper -->
	<main
		class="flex min-h-screen flex-col md:flex-row overflow-hidden bg-background font-body-base text-on-background"
	>
		<!-- Left: form panel -->
		<section
			class="w-full md:w-1/2 flex flex-col justify-center items-center px-8 py-16 bg-surface relative"
		>
			<header class="absolute top-0 left-0 w-full p-6">
				<RouterLink to="/" class="flex items-center gap-2">
					<span class="material-symbols-outlined text-primary text-2xl"
						>terminal</span
					>
					<span
						class="font-display text-xl tracking-tighter text-primary font-black"
						>BinarySync</span
					>
				</RouterLink>
			</header>

			<div class="w-full max-w-sm mt-8">
				<AuthContainer />
			</div>

			<footer class="absolute bottom-6 text-center">
				<p class="text-xs text-on-surface-variant">
					© {{ year }} BinarySync Inc.
				</p>
			</footer>
		</section>

		<!-- Right: decorative code panel -->
		<section
			class="hidden md:flex w-1/2 bg-primary-container relative overflow-hidden flex-col justify-center items-center px-12"
		>
			<div
				class="absolute inset-0 opacity-20"
				style="
					background-image: radial-gradient(
						circle at 2px 2px,
						rgba(53, 37, 205, 0.05) 1px,
						transparent 0
					);
					background-size: 24px 24px;
				"
			></div>
			<div
				class="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-secondary-container/20 blur-[100px] rounded-full"
			></div>
			<div
				class="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-primary/30 blur-[100px] rounded-full"
			></div>

			<div class="relative z-10 w-full max-w-md space-y-8">
				<!-- Code card -->
				<div
					class="bg-inverse-surface/90 backdrop-blur-md rounded-xl p-6 border border-white/10 shadow-2xl"
				>
					<div
						class="flex items-center justify-between border-b border-white/10 pb-4 mb-4"
					>
						<div class="flex gap-1.5">
							<div class="w-3 h-3 rounded-full bg-red-400/70"></div>
							<div class="w-3 h-3 rounded-full bg-yellow-400/70"></div>
							<div class="w-3 h-3 rounded-full bg-green-400/70"></div>
						</div>
						<span class="text-white/40 text-xs font-mono-input"
							>auth_provider.ts</span
						>
					</div>
					<div class="font-mono-input text-sm space-y-0.5">
						<p>
							<span class="text-blue-300">import</span>
							<span class="text-white">{ BinarySync }</span>
							<span class="text-blue-300">from</span>
							<span class="text-green-300">'@binarysync/core'</span
							><span class="text-white">;</span>
						</p>
						<p class="text-white/20">&nbsp;</p>
						<p>
							<span class="text-blue-300">async function</span>
							<span class="text-yellow-300">initializeSession</span
							><span class="text-white">() {</span>
						</p>
						<p>
							<span class="text-white">&nbsp;&nbsp;</span
							><span class="text-blue-300">const</span
							><span class="text-white"> client = </span
							><span class="text-blue-300">new</span>
							<span class="text-yellow-300">BinarySync</span
							><span class="text-white">({</span>
						</p>
						<p>
							<span class="text-white"
								>&nbsp;&nbsp;&nbsp;&nbsp;apiKey: process.env.</span
							><span class="text-orange-300">API_KEY</span
							><span class="text-white">,</span>
						</p>
						<p>
							<span class="text-white">&nbsp;&nbsp;&nbsp;&nbsp;secure: </span
							><span class="text-green-300">true</span>
						</p>
						<p><span class="text-white">&nbsp;&nbsp;});</span></p>
						<p class="text-white/20">&nbsp;</p>
						<p>
							<span class="text-white">&nbsp;&nbsp;</span
							><span class="text-blue-300">await</span
							><span class="text-white"> client.</span
							><span class="text-yellow-300">connect</span
							><span class="text-white">();</span>
						</p>
						<p>
							<span class="text-green-300/70"
								>&nbsp;&nbsp;// Successfully authenticated</span
							>
						</p>
						<p><span class="text-white">}</span></p>
					</div>
				</div>

				<!-- Tagline -->
				<div class="text-center space-y-3">
					<h3 class="font-display text-white text-3xl font-black">
						Built for performance.
					</h3>
					<p class="text-slate-400 text-sm max-w-sm mx-auto">
						The world's most advanced tool for binary-to-text translation and
						real-time data synchronization.
					</p>
				</div>

				<!-- Stats -->
				<div class="flex justify-center items-center gap-8">
					<div class="flex flex-col items-center">
						<span class="font-display text-white text-3xl font-black"
							>99.9%</span
						>
						<span
							class="text-slate-400 text-xs uppercase tracking-widest font-bold"
							>UPTIME</span
						>
					</div>
					<div class="w-px h-10 bg-white/10"></div>
					<div class="flex flex-col items-center">
						<span class="font-display text-white text-3xl font-black">2k+</span>
						<span
							class="text-slate-400 text-xs uppercase tracking-widest font-bold"
							>ACTIVE DEVS</span
						>
					</div>
					<div class="w-px h-10 bg-white/10"></div>
					<div class="flex flex-col items-center">
						<span class="font-display text-white text-3xl font-black"
							>&lt;1ms</span
						>
						<span
							class="text-slate-400 text-xs uppercase tracking-widest font-bold"
							>LATENCY</span
						>
					</div>
				</div>
			</div>
		</section>
	</main>
</template>

<script setup>
import AuthContainer from "@/components/auth/AuthContainer.vue";
const year = new Date().getFullYear();
</script>
