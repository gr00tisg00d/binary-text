<template>
	<form @submit.prevent="handleSubmit" class="space-y-stack-md">
		<!-- Heading -->
		<div class="space-y-1">
			<h2 class="font-display text-display text-on-surface">Create account</h2>
			<p class="font-body-base text-on-surface-variant">
				Join BinarySync and start messaging in binary.
			</p>
		</div>

		<!-- Display name -->
		<div class="space-y-1">
			<label
				class="font-label-caps text-label-caps text-on-surface-variant block uppercase"
			>
				Display Name
			</label>
			<input
				v-model="name"
				type="text"
				autocomplete="name"
				placeholder="Your name"
				required
				minlength="2"
				class="w-full bg-white border border-outline-variant rounded-lg px-4 py-3 font-mono-input text-mono-input focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-outline"
			/>
		</div>

		<!-- Email -->
		<div class="space-y-1">
			<label
				class="font-label-caps text-label-caps text-on-surface-variant block uppercase"
			>
				Email Address
			</label>
			<input
				v-model="email"
				type="email"
				autocomplete="email"
				placeholder="you@example.com"
				required
				class="w-full bg-white border border-outline-variant rounded-lg px-4 py-3 font-mono-input text-mono-input focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-outline"
			/>
		</div>

		<!-- Password -->
		<div class="space-y-1">
			<label
				class="font-label-caps text-label-caps text-on-surface-variant block uppercase"
			>
				Password
			</label>
			<input
				v-model="password"
				type="password"
				autocomplete="new-password"
				placeholder="Min. 8 characters"
				required
				minlength="8"
				class="w-full bg-white border border-outline-variant rounded-lg px-4 py-3 font-mono-input text-mono-input focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-outline"
			/>
		</div>

		<!-- Confirm password -->
		<div class="space-y-1">
			<label
				class="font-label-caps text-label-caps text-on-surface-variant block uppercase"
			>
				Confirm Password
			</label>
			<input
				v-model="confirmPassword"
				type="password"
				autocomplete="new-password"
				placeholder="Repeat password"
				required
				class="w-full bg-white border border-outline-variant rounded-lg px-4 py-3 font-mono-input text-mono-input focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-outline"
				:class="
					confirmPassword && password !== confirmPassword
						? 'border-error focus:border-error'
						: ''
				"
			/>
			<p
				v-if="confirmPassword && password !== confirmPassword"
				class="font-body-sm text-error text-sm mt-1"
			>
				Passwords do not match.
			</p>
		</div>

		<!-- Submit -->
		<button
			type="submit"
			:disabled="loading || (!!confirmPassword && password !== confirmPassword)"
			class="w-full bg-primary text-on-primary font-semibold py-3.5 rounded-xl shadow-md hover:bg-on-primary-fixed-variant active:scale-[0.98] transition-all flex justify-center items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
		>
			<span
				v-if="loading"
				class="material-symbols-outlined animate-spin text-[20px]"
				>sync</span
			>
			<span v-else>Create Account</span>
			<span v-if="!loading" class="material-symbols-outlined text-sm"
				>arrow_forward</span
			>
		</button>

		<!-- Divider -->
		<div class="relative py-2">
			<div class="absolute inset-0 flex items-center">
				<div class="w-full border-t border-outline-variant"></div>
			</div>
			<div class="relative flex justify-center">
				<span
					class="bg-surface px-4 font-label-caps text-label-caps text-on-surface-variant uppercase"
				>
					Or sign up with
				</span>
			</div>
		</div>

		<!-- Google -->
		<button
			type="button"
			@click="handleGoogle"
			:disabled="loading"
			class="w-full flex items-center justify-center gap-2 border border-outline-variant rounded-xl py-3 bg-white hover:bg-surface-container-low transition-colors font-body-sm font-semibold disabled:opacity-60"
		>
			<svg class="w-5 h-5" viewBox="0 0 48 48">
				<path
					fill="#4285F4"
					d="M24 9.5c3.5 0 6.6 1.2 9 3.2l6.7-6.7C35.6 2.3 30.1 0 24 0 14.7 0 6.7 5.4 2.7 13.3l7.8 6c1.8-5.4 6.8-9.8 13.5-9.8z"
				/>
				<path
					fill="#34A853"
					d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v8.5h12.7c-.6 3-2.3 5.5-4.8 7.2l7.5 5.8c4.4-4.1 7.1-10.1 7.1-17z"
				/>
				<path
					fill="#FBBC05"
					d="M10.5 28.6A14.5 14.5 0 0 1 9.5 24c0-1.6.3-3.1.8-4.6l-7.8-6A23.9 23.9 0 0 0 0 24c0 3.9.9 7.5 2.6 10.7l7.9-6.1z"
				/>
				<path
					fill="#EA4335"
					d="M24 48c6.1 0 11.2-2 14.9-5.5l-7.5-5.8c-2 1.4-4.6 2.2-7.4 2.2-6.7 0-12.3-4.5-14.3-10.7l-7.9 6.1C6.6 42.5 14.7 48 24 48z"
				/>
			</svg>
			Continue with Google
		</button>
	</form>
</template>

<script setup>
import { ref } from "vue";
import { useAuthStore } from "@/stores/auth";

const authStore = useAuthStore();

const name = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const loading = ref(false);

async function handleSubmit() {
	if (password.value !== confirmPassword.value) return;
	loading.value = true;
	try {
		await authStore.registerWithEmail(email.value, password.value, name.value);
	} catch {
		// Error shown by store
	} finally {
		loading.value = false;
	}
}

async function handleGoogle() {
	loading.value = true;
	try {
		await authStore.signInWithGoogle();
	} finally {
		loading.value = false;
	}
}
</script>
