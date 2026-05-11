<template>
	<AppLayout>
		<div class="max-w-6xl mx-auto px-6 py-12 space-y-8">
			<!-- Header Row -->
			<div
				class="flex flex-col md:flex-row md:items-center justify-between gap-4"
			>
				<div class="space-y-1">
					<p class="text-xs font-bold uppercase tracking-widest text-slate-500">
						DEVELOPER UTILITIES
					</p>
					<h1 class="font-display text-display text-on-background">
						Translation History
					</h1>
				</div>
				<div class="flex gap-3">
					<div class="relative flex-1 md:w-72">
						<span
							class="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 text-[18px]"
							>search</span
						>
						<input
							v-model="filterText"
							type="text"
							placeholder="Search translations..."
							class="w-full pl-9 pr-4 py-2.5 rounded-lg border border-slate-200 bg-white text-sm text-on-surface placeholder-slate-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 shadow-sm"
						/>
					</div>
					<button
						@click="clearAll"
						class="flex items-center gap-2 border border-red-200 text-red-500 hover:bg-red-50 px-4 py-2.5 rounded-lg font-body-sm font-semibold transition-colors"
					>
						<span class="material-symbols-outlined text-[18px]"
							>delete_sweep</span
						>
						Clear History
					</button>
				</div>
			</div>

			<!-- Stat Cards -->
			<div v-if="!loading" class="grid grid-cols-2 md:grid-cols-4 gap-4">
				<div
					class="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex items-center gap-4"
				>
					<div
						class="w-10 h-10 rounded-lg flex items-center justify-center"
						style="background-color: #d0e4ff"
					>
						<span class="material-symbols-outlined text-primary text-xl"
							>list_alt</span
						>
					</div>
					<div>
						<p class="font-display text-2xl font-black text-on-surface">
							{{ allMessages.length }}
						</p>
						<p
							class="text-xs font-bold uppercase tracking-wider text-slate-500"
						>
							Total Entries
						</p>
					</div>
				</div>
				<div
					class="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex items-center gap-4"
				>
					<div
						class="w-10 h-10 rounded-lg flex items-center justify-center bg-secondary/10"
					>
						<span class="material-symbols-outlined text-secondary text-xl"
							>compare_arrows</span
						>
					</div>
					<div>
						<p class="font-display text-2xl font-black text-on-surface">
							{{ allMessages.filter((m) => m.binary).length }}
						</p>
						<p
							class="text-xs font-bold uppercase tracking-wider text-slate-500"
						>
							Binary to Text
						</p>
					</div>
				</div>
				<div
					class="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex items-center gap-4"
				>
					<div
						class="w-10 h-10 rounded-lg flex items-center justify-center bg-tertiary/10"
					>
						<span class="material-symbols-outlined text-tertiary text-xl"
							>translate</span
						>
					</div>
					<div>
						<p class="font-display text-xl font-black text-on-surface truncate">
							{{ lastLanguage }}
						</p>
						<p
							class="text-xs font-bold uppercase tracking-wider text-slate-500"
						>
							Last Language
						</p>
					</div>
				</div>
				<div
					class="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex items-center gap-4"
				>
					<div
						class="w-10 h-10 rounded-lg flex items-center justify-center bg-slate-100"
					>
						<span class="material-symbols-outlined text-slate-500 text-xl"
							>update</span
						>
					</div>
					<div>
						<p class="font-display text-xl font-black text-on-surface truncate">
							{{ lastActivity }}
						</p>
						<p
							class="text-xs font-bold uppercase tracking-wider text-slate-500"
						>
							Last Activity
						</p>
					</div>
				</div>
			</div>

			<!-- Table -->
			<div
				class="bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden"
			>
				<!-- Loading state -->
				<div v-if="loading" class="p-12 flex justify-center">
					<span
						class="material-symbols-outlined animate-spin text-primary text-3xl"
						>sync</span
					>
				</div>

				<!-- Empty state -->
				<div
					v-else-if="paginatedMessages.length === 0"
					class="p-12 text-center"
				>
					<span
						class="material-symbols-outlined text-slate-300 text-5xl block mb-3"
						>history</span
					>
					<p class="font-headline-md text-slate-400">
						No translation history yet
					</p>
					<p class="font-body-sm text-slate-300 mt-1">
						Your translations will appear here after you use the translator.
					</p>
				</div>

				<!-- Table data -->
				<table v-else class="w-full text-sm">
					<thead>
						<tr class="border-b border-slate-200 bg-slate-50">
							<th
								class="text-left px-6 py-3 font-bold uppercase tracking-wider text-slate-500 text-xs"
							>
								Original Binary
							</th>
							<th
								class="text-left px-6 py-3 font-bold uppercase tracking-wider text-slate-500 text-xs"
							>
								Translated Text
							</th>
							<th
								class="text-left px-6 py-3 font-bold uppercase tracking-wider text-slate-500 text-xs"
							>
								Schema
							</th>
							<th
								class="text-left px-6 py-3 font-bold uppercase tracking-wider text-slate-500 text-xs"
							>
								Timestamp
							</th>
							<th
								class="text-left px-6 py-3 font-bold uppercase tracking-wider text-slate-500 text-xs"
							>
								Actions
							</th>
						</tr>
					</thead>
					<tbody>
						<tr
							v-for="msg in paginatedMessages"
							:key="msg.id"
							class="border-b border-slate-100 hover:bg-slate-50 group transition-colors"
						>
							<td
								class="px-6 py-4 font-mono-input text-xs text-slate-500 max-w-[200px]"
							>
								<span class="block truncate">{{ msg.binary || "—" }}</span>
							</td>
							<td
								class="px-6 py-4 font-body-sm font-semibold text-on-surface max-w-[200px]"
							>
								<span class="block truncate">{{ msg.text || "—" }}</span>
							</td>
							<td class="px-6 py-4">
								<span
									v-if="msg.language && msg.language !== 'en'"
									class="bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider px-2 py-1 rounded-full"
									>{{ msg.language }}</span
								>
								<span
									v-else
									class="bg-slate-100 text-slate-500 text-xs font-bold uppercase tracking-wider px-2 py-1 rounded-full"
									>UTF-8</span
								>
							</td>
							<td
								class="px-6 py-4 font-body-sm text-slate-400 whitespace-nowrap"
							>
								{{ formatTime(msg.timestamp) }}
							</td>
							<td class="px-6 py-4">
								<div
									class="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
								>
									<button
										@click="copyMsg(msg)"
										title="Copy"
										class="p-1.5 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-primary transition-colors"
									>
										<span class="material-symbols-outlined text-[16px]"
											>content_copy</span
										>
									</button>
									<button
										@click="deleteMsg(msg)"
										title="Delete"
										class="p-1.5 rounded-lg hover:bg-red-50 text-slate-400 hover:text-red-500 transition-colors"
									>
										<span class="material-symbols-outlined text-[16px]"
											>delete</span
										>
									</button>
								</div>
							</td>
						</tr>
					</tbody>
				</table>

				<!-- Pagination footer -->
				<div
					v-if="!loading && filteredMessages.length > pageSize"
					class="px-6 py-4 border-t border-slate-200 flex items-center justify-between bg-slate-50"
				>
					<p class="font-body-sm text-slate-500">
						Showing {{ (currentPage - 1) * pageSize + 1 }}–{{
							Math.min(currentPage * pageSize, filteredMessages.length)
						}}
						of {{ filteredMessages.length }} results
					</p>
					<div class="flex items-center gap-2">
						<button
							@click="currentPage--"
							:disabled="currentPage === 1"
							class="p-2 rounded-lg border border-slate-200 hover:bg-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
						>
							<span class="material-symbols-outlined text-[18px]"
								>chevron_left</span
							>
						</button>
						<span class="font-body-sm text-slate-600 px-2"
							>Page {{ currentPage }} of {{ totalPages }}</span
						>
						<button
							@click="currentPage++"
							:disabled="currentPage === totalPages"
							class="p-2 rounded-lg border border-slate-200 hover:bg-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
						>
							<span class="material-symbols-outlined text-[18px]"
								>chevron_right</span
							>
						</button>
					</div>
				</div>
			</div>
		</div>
	</AppLayout>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import {
	collectionGroup,
	query,
	where,
	orderBy,
	getDocs,
} from "firebase/firestore";
import { db } from "@/firebase";
import { useAuthStore } from "@/stores/auth";
import AppLayout from "@/components/layout/AppLayout.vue";

const authStore = useAuthStore();
const allMessages = ref([]);
const loading = ref(true);
const filterText = ref("");
const currentPage = ref(1);
const pageSize = 10;

const filteredMessages = computed(() => {
	if (!filterText.value.trim()) return allMessages.value;
	const q = filterText.value.toLowerCase();
	return allMessages.value.filter(
		(m) =>
			m.text?.toLowerCase().includes(q) ||
			m.binary?.includes(q) ||
			m.translatedText?.toLowerCase().includes(q),
	);
});

const totalPages = computed(() =>
	Math.max(1, Math.ceil(filteredMessages.value.length / pageSize)),
);

const paginatedMessages = computed(() => {
	const start = (currentPage.value - 1) * pageSize;
	return filteredMessages.value.slice(start, start + pageSize);
});

const lastLanguage = computed(() => {
	const msg = allMessages.value.find((m) => m.language && m.language !== "en");
	return msg?.language?.toUpperCase() || "EN";
});

const lastActivity = computed(() => {
	const msg = allMessages.value[0];
	if (!msg?.timestamp) return "—";
	return formatTime(msg.timestamp);
});

function formatTime(ts) {
	if (!ts) return "—";
	const d = ts.toDate ? ts.toDate() : new Date(ts);
	return d.toLocaleDateString(undefined, {
		month: "short",
		day: "numeric",
		hour: "2-digit",
		minute: "2-digit",
	});
}

async function loadHistory() {
	loading.value = true;
	try {
		const uid = authStore.user?.uid;
		if (!uid) return;
		const q = query(
			collectionGroup(db, "messages"),
			where("senderId", "==", uid),
			orderBy("timestamp", "desc"),
		);
		const snap = await getDocs(q);
		allMessages.value = snap.docs.map((d) => ({
			id: d.id,
			convId: d.ref.parent.parent?.id,
			...d.data(),
		}));
	} finally {
		loading.value = false;
	}
}

function copyMsg(msg) {
	navigator.clipboard.writeText(msg.text || msg.binary || "").catch(() => {});
}

function deleteMsg(msg) {
	allMessages.value = allMessages.value.filter((m) => m.id !== msg.id);
}

function clearAll() {
	if (confirm("Clear all translation history?")) {
		allMessages.value = [];
	}
}

onMounted(loadHistory);
</script>
