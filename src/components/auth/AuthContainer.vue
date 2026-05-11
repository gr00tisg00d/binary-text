<template>
	<!-- Switches between LoginForm and SignupForm based on the `tab` prop / query param -->
	<div class="w-full max-w-sm space-y-stack-lg">
		<!-- Tab switcher -->
		<div class="flex bg-surface-container-low p-1 rounded-xl w-fit">
			<button
				@click="activeTab = 'login'"
				class="px-6 py-2 rounded-lg font-body-sm font-semibold transition-all"
				:class="
					activeTab === 'login'
						? 'bg-white text-on-surface shadow-sm'
						: 'text-on-surface-variant hover:text-on-surface'
				"
			>
				Sign In
			</button>
			<button
				@click="activeTab = 'signup'"
				class="px-6 py-2 rounded-lg font-body-sm font-semibold transition-all"
				:class="
					activeTab === 'signup'
						? 'bg-white text-on-surface shadow-sm'
						: 'text-on-surface-variant hover:text-on-surface'
				"
			>
				Create Account
			</button>
		</div>

		<!-- Forms -->
		<Transition name="fade-slide" mode="out-in">
			<LoginForm v-if="activeTab === 'login'" :key="'login'" />
			<SignupForm v-else :key="'signup'" />
		</Transition>
	</div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import LoginForm from "./LoginForm.vue";
import SignupForm from "./SignupForm.vue";

const route = useRoute();
const activeTab = ref(route.query.tab === "signup" ? "signup" : "login");

// Keep in sync when query param changes (e.g. Navbar "Sign Up" link)
watch(
	() => route.query.tab,
	(tab) => {
		if (tab === "signup") activeTab.value = "signup";
	},
);
</script>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
	transition:
		opacity 0.18s ease,
		transform 0.18s ease;
}
.fade-slide-enter-from {
	opacity: 0;
	transform: translateX(10px);
}
.fade-slide-leave-to {
	opacity: 0;
	transform: translateX(-10px);
}
</style>
