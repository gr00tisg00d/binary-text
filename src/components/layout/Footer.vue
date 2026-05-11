<template>
	<footer class="border-t border-outline-variant bg-white py-10">
		<div
			class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6"
		>
			<div class="flex flex-col gap-1">
				<div class="flex items-center gap-2">
					<span class="material-symbols-outlined text-primary text-xl"
						>terminal</span
					>
					<span class="text-base font-black tracking-tighter text-primary"
						>BinarySync</span
					>
				</div>
				<p class="text-body-sm text-on-surface-variant">
					© {{ year }} BinarySync. All rights reserved.
				</p>
			</div>

			<div class="flex gap-6">
				<a
					href="#"
					class="text-body-sm text-on-surface-variant hover:text-primary transition-colors"
					>Terms</a
				>
				<a
					href="#"
					class="text-body-sm text-on-surface-variant hover:text-primary transition-colors"
					>Privacy</a
				>
				<a
					href="#"
					class="text-body-sm text-on-surface-variant hover:text-primary transition-colors"
					>Contact</a
				>
			</div>
		</div>
	</footer>
</template>

<script setup>
const year = new Date().getFullYear();
</script>
