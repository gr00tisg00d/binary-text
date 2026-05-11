<template>
	<NotificationToast />
	<RouterView />
</template>

<script setup>
import { useAuthStore } from "@/stores/auth";
import NotificationToast from "@/components/feedback/NotificationToast.vue";

// Kick off Firebase auth listener immediately so the router guard
// can await auth readiness before deciding to redirect.
const authStore = useAuthStore();
authStore.initAuth();
</script>
