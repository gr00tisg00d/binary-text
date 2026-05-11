<template>
	<nav
		class="bg-white border-b border-outline-variant shadow-sm sticky top-0 z-50"
	>
		<div class="flex items-center justify-between px-8 h-16 w-full">
			<!-- Logo + Desktop Nav -->
			<div class="flex items-center gap-8">
				<RouterLink to="/" class="select-none">
					<span class="text-lg font-black tracking-tighter text-primary"
						>BinarySync</span
					>
				</RouterLink>

				<div class="hidden md:flex items-center gap-6 h-full">
					<NavLink to="/dashboard" label="Translator" />
					<NavLink to="/history" label="History" />
					<NavLink to="/chat" label="Messages" />
				</div>
			</div>

			<!-- Right: user controls -->
			<div class="flex items-center gap-3">
				<!-- Authenticated -->
				<template v-if="authStore.isAuthenticated">
					<div class="relative" ref="menuRef">
						<button
							@click="menuOpen = !menuOpen"
							class="flex items-center gap-2 px-3 py-1.5 rounded-xl hover:bg-surface-container transition-colors"
						>
							<img
								v-if="authStore.photoURL"
								:src="authStore.photoURL"
								:alt="authStore.displayName"
								class="w-8 h-8 rounded-full object-cover"
							/>
							<span
								v-else
								class="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-semibold text-sm"
							>
								{{ authStore.displayName.charAt(0).toUpperCase() }}
							</span>
							<span
								class="hidden md:block font-body-sm text-on-surface font-medium"
							>
								{{ authStore.displayName }}
							</span>
							<span
								class="material-symbols-outlined text-on-surface-variant text-[18px]"
							>
								expand_more
							</span>
						</button>

						<!-- Dropdown menu -->
						<Transition name="fade-down">
							<div
								v-if="menuOpen"
								class="absolute right-0 top-12 w-48 bg-white border border-outline-variant rounded-xl shadow-xl py-1 z-10"
							>
								<RouterLink
									to="/chat"
									@click="menuOpen = false"
									class="flex items-center gap-2 px-4 py-2.5 text-body-sm text-on-surface hover:bg-surface-container-low transition-colors"
								>
									<span class="material-symbols-outlined text-[18px]"
										>chat</span
									>
									Messages
								</RouterLink>
								<RouterLink
									to="/history"
									@click="menuOpen = false"
									class="flex items-center gap-2 px-4 py-2.5 text-body-sm text-on-surface hover:bg-surface-container-low transition-colors"
								>
									<span class="material-symbols-outlined text-[18px]"
										>history</span
									>
									History
								</RouterLink>
								<hr class="border-outline-variant my-1" />
								<button
									@click="handleLogout"
									class="w-full flex items-center gap-2 px-4 py-2.5 text-body-sm text-error hover:bg-error-container transition-colors"
								>
									<span class="material-symbols-outlined text-[18px]"
										>logout</span
									>
									Sign Out
								</button>
							</div>
						</Transition>
					</div>
				</template>

				<!-- Guest -->
				<template v-else>
					<RouterLink
						to="/auth"
						class="font-sans text-sm font-medium tracking-tight text-outline hover:text-primary transition-colors cursor-pointer px-3 py-2"
					>
						Sign In
					</RouterLink>
					<RouterLink
						to="/auth?tab=signup"
						class="bg-primary text-on-primary font-sans text-sm font-medium tracking-tight px-4 py-2 rounded-lg shadow-sm hover:opacity-90 active:scale-95 transition-all"
					>
						Sign Up
					</RouterLink>
				</template>
			</div>
		</div>

		<!-- Mobile bottom nav is in the slot of views that need it -->
	</nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useAuthStore } from "@/stores/auth";
import NavLink from "./NavLink.vue";

const authStore = useAuthStore();
const menuOpen = ref(false);
const menuRef = ref(null);

function handleClickOutside(e) {
	if (menuRef.value && !menuRef.value.contains(e.target)) {
		menuOpen.value = false;
	}
}

onMounted(() => document.addEventListener("click", handleClickOutside));
onBeforeUnmount(() =>
	document.removeEventListener("click", handleClickOutside),
);

async function handleLogout() {
	menuOpen.value = false;
	await authStore.logout();
}
</script>

<style scoped>
.fade-down-enter-active,
.fade-down-leave-active {
	transition:
		opacity 0.15s ease,
		transform 0.15s ease;
}
.fade-down-enter-from,
.fade-down-leave-to {
	opacity: 0;
	transform: translateY(-6px);
}
</style>
