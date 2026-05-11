import { createRouter, createWebHashHistory } from "vue-router";
import { useAuthStore } from "@/stores/auth";

const routes = [
	{
		path: "/",
		component: () => import("@/views/LandingView.vue"),
	},
	{
		path: "/auth",
		component: () => import("@/views/AuthView.vue"),
		meta: { requiresGuest: true },
	},
	{
		path: "/chat",
		component: () => import("@/views/ChatView.vue"),
		meta: { requiresAuth: true },
	},
	{
		path: "/chat/:id",
		component: () => import("@/views/ChatView.vue"),
		meta: { requiresAuth: true },
	},
	{
		path: "/dashboard",
		component: () => import("@/views/DashboardView.vue"),
	},
	{
		path: "/history",
		component: () => import("@/views/HistoryView.vue"),
		meta: { requiresAuth: true },
	},
	// Catch-all fallback
	{
		path: "/:pathMatch(.*)*",
		redirect: "/",
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
	scrollBehavior: () => ({ top: 0 }),
});

router.beforeEach(async (to) => {
	const authStore = useAuthStore();
	// Wait for the first Firebase auth state emission
	await authStore.initAuth();

	if (to.meta.requiresAuth && !authStore.user) {
		return { path: "/auth", query: { redirect: to.fullPath } };
	}
	if (to.meta.requiresGuest && authStore.user) {
		return "/chat";
	}
});

export default router;
