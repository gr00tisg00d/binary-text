<template>
	<div class="min-h-screen flex flex-col bg-background text-on-background">
		<Navbar />
		<main class="flex-1 flex flex-col">
			<slot />
		</main>
		<Footer v-if="showFooter" />
	</div>
</template>

<script setup>
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";

defineProps({
	showFooter: {
		type: Boolean,
		default: true,
	},
});
</script>
