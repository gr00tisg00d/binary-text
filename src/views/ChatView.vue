<template>
	<AppLayout :show-footer="false">
		<div class="flex h-[calc(100vh-4rem)] overflow-hidden">
			<!-- Sidebar -->
			<aside
				class="w-72 flex-shrink-0 flex flex-col border-r border-outline-variant bg-white"
			>
				<!-- Sidebar header -->
				<div
					class="flex items-center justify-between px-4 py-3.5 border-b border-outline-variant"
				>
					<h2 class="font-headline-md text-on-surface">Messages</h2>
					<button
						@click="showAddUser = true"
						class="w-9 h-9 rounded-xl flex items-center justify-center text-primary hover:bg-primary/10 transition-colors"
						title="Find & add users"
					>
						<span class="material-symbols-outlined text-[22px]"
							>person_add</span
						>
					</button>
				</div>

				<!-- Conversation list -->
				<div class="flex-1 overflow-y-auto scrollbar-thin p-2 space-y-1">
					<!-- Bot conversation â€” always pinned first -->
					<button
						v-if="botConv"
						@click="selectConversation(botConv)"
						class="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-colors"
						:class="
							activeConvId === botConv.id
								? 'bg-primary-fixed'
								: 'hover:bg-surface-container'
						"
					>
						<div
							class="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0"
						>
							<span
								class="material-symbols-outlined text-on-primary text-[20px]"
								style="font-variation-settings: &quot;FILL&quot; 1"
								>smart_toy</span
							>
						</div>
						<div class="min-w-0 flex-1">
							<div class="flex items-center gap-2">
								<p class="font-body-sm font-semibold text-on-surface truncate">
									BinarySync Bot
								</p>
								<span
									class="flex-shrink-0 text-[9px] font-bold bg-primary/10 text-primary px-1.5 py-0.5 rounded-full"
									>BOT</span
								>
							</div>
							<p class="font-label-caps text-outline truncate">
								{{ botConv.lastMessage || "â€”" }}
							</p>
						</div>
					</button>

					<!-- Divider between bot and regular conversations -->
					<div
						v-if="botConv && regularConvs.length"
						class="border-t border-outline-variant mx-2 my-1"
					></div>

					<!-- Regular conversations -->
					<button
						v-for="conv in regularConvs"
						:key="conv.id"
						@click="selectConversation(conv)"
						class="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-colors"
						:class="
							activeConvId === conv.id
								? 'bg-primary-fixed text-on-surface'
								: 'hover:bg-surface-container'
						"
					>
						<div
							class="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed font-bold flex-shrink-0"
						>
							{{ initials(otherParticipantName(conv)) }}
						</div>
						<div class="min-w-0 flex-1">
							<p class="font-body-sm font-semibold text-on-surface truncate">
								{{ otherParticipantName(conv) }}
							</p>
							<p class="font-label-caps text-outline truncate">
								{{ conv.lastMessage || "â€”" }}
							</p>
						</div>
					</button>

					<!-- Empty state -->
					<p
						v-if="!botConv && !regularConvs.length"
						class="text-center text-outline font-body-sm py-8 px-4 leading-relaxed"
					>
						No conversations yet.<br />Click
						<span class="material-symbols-outlined text-[14px] align-middle"
							>person_add</span
						>
						above to find users.
					</p>
				</div>
			</aside>

			<!-- Main chat area -->
			<div class="flex-1 flex flex-col overflow-hidden">
				<!-- No conversation selected -->
				<div
					v-if="!activeConvId"
					class="flex-1 flex items-center justify-center text-center px-8"
				>
					<div class="space-y-4">
						<span
							class="material-symbols-outlined text-6xl text-primary"
							style="font-variation-settings: &quot;FILL&quot; 1"
							>chat_bubble</span
						>
						<h2 class="font-headline-md text-on-surface">
							Select a conversation
						</h2>
						<p class="font-body-sm text-on-surface-variant max-w-xs mx-auto">
							Choose from the list on the left or click
							<span
								class="material-symbols-outlined text-[14px] align-middle text-primary"
								>person_add</span
							>
							to find users.
						</p>
					</div>
				</div>

				<template v-else>
					<!-- Chat header -->
					<header
						class="flex items-center gap-3 px-6 py-3 border-b border-outline-variant bg-white"
					>
						<div
							v-if="isActiveConvBot"
							class="w-9 h-9 rounded-full bg-primary flex items-center justify-center flex-shrink-0"
						>
							<span
								class="material-symbols-outlined text-on-primary text-[18px]"
								style="font-variation-settings: &quot;FILL&quot; 1"
								>smart_toy</span
							>
						</div>
						<div
							v-else
							class="w-9 h-9 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed font-bold flex-shrink-0"
						>
							{{ initials(activeParticipantName) }}
						</div>
						<div>
							<div class="flex items-center gap-2">
								<p class="font-headline-md text-on-surface">
									{{ activeParticipantName }}
								</p>
								<span
									v-if="isActiveConvBot"
									class="text-[9px] font-bold bg-primary/10 text-primary px-1.5 py-0.5 rounded-full"
									>BOT</span
								>
							</div>
							<p v-if="isActiveConvBot" class="font-label-caps text-outline">
								Always online · Auto-replies in binary
							</p>
						</div>
						<!-- Cheat sheet toggle -->
						<button
							@click="showCheatSheet = !showCheatSheet"
							class="ml-auto w-9 h-9 rounded-xl flex items-center justify-center transition-colors"
							:class="
								showCheatSheet
									? 'bg-primary/10 text-primary'
									: 'text-outline hover:bg-surface-container'
							"
							title="Binary cheat sheet"
						>
							<span class="material-symbols-outlined text-[20px]"
								>menu_book</span
							>
						</button>
					</header>

					<!-- Messages -->
					<div
						ref="messagesEl"
						class="flex-1 overflow-y-auto scrollbar-thin px-6 py-4 space-y-3 bg-surface-container-lowest"
					>
						<div
							v-for="msg in chatStore.messages"
							:key="msg.id"
							class="flex"
							:class="
								msg.senderId === authStore.user?.uid
									? 'justify-end'
									: 'justify-start'
							"
						>
							<div
								class="max-w-[70%] rounded-2xl px-4 py-3 shadow-sm space-y-1"
								:class="
									msg.senderId === authStore.user?.uid
										? 'bg-primary text-on-primary rounded-br-sm'
										: 'bg-white text-on-surface border border-outline-variant rounded-bl-sm'
								"
							>
								<p class="font-body-base">{{ msg.text }}</p>
								<p v-if="msg.translatedText" class="font-label-caps opacity-75">
									{{ msg.translatedText }}
								</p>
								<p
									v-if="msg.binary"
									class="font-mono-input text-[10px] opacity-50"
								>
									{{ formatBinary(msg.binary) }}
								</p>
							</div>
						</div>
					</div>

					<!-- Binary input area -->
					<div class="border-t border-outline-variant bg-white p-4">
						<BinaryInputContainer @send="handleSend" />
					</div>
				</template>
			</div>

			<!-- Binary Cheat Sheet Panel -->
			<Transition name="sheet">
				<aside
					v-if="showCheatSheet"
					class="flex-shrink-0 flex flex-row border-l border-outline-variant bg-surface overflow-hidden select-none"
					:style="{ width: sheetWidth + 'px' }"
				>
					<!-- Drag handle -->
					<div
						@mousedown="startSheetDrag"
						class="w-1.5 flex-shrink-0 cursor-col-resize bg-outline-variant hover:bg-primary/40 transition-colors"
					/>

					<!-- Content -->
					<div class="flex-1 flex flex-col overflow-hidden">
						<div
							class="flex items-center justify-between px-3 py-3 border-b border-outline-variant bg-white"
						>
							<span
								class="font-label-caps text-label-caps text-outline uppercase tracking-wider"
								>Cheat Sheet</span
							>
							<button
								@click="showCheatSheet = false"
								class="w-7 h-7 rounded-lg flex items-center justify-center hover:bg-surface-container transition-colors"
							>
								<span class="material-symbols-outlined text-outline text-[18px]"
									>close</span
								>
							</button>
						</div>
						<div
							class="flex-1 overflow-y-auto scrollbar-thin px-2 py-2 space-y-3"
							:style="{ fontSize: sheetFontSize + 'px' }"
						>
							<div v-for="group in CHEAT_SHEET" :key="group.label">
								<p
									class="font-label-caps text-primary uppercase px-1 mb-1 font-bold"
								>
									{{ group.label }}
								</p>
								<div
									class="grid gap-x-1"
									:style="{ gridTemplateColumns: sheetCols }"
								>
									<div
										v-for="entry in group.entries"
										:key="entry.bin"
										class="flex items-center gap-1 px-1 py-0.5 rounded hover:bg-surface-container"
									>
										<span
											class="text-center font-semibold text-on-surface flex-shrink-0"
											:style="{ width: sheetFontSize * 1.4 + 'px' }"
											>{{ entry.char }}</span
										>
										<span
											class="font-mono text-outline tracking-tight leading-none"
											>{{ entry.bin }}</span
										>
									</div>
								</div>
							</div>
						</div>
					</div>
				</aside>
			</Transition>
		</div>

		<!-- Add User Modal -->
		<Teleport to="body">
			<Transition name="modal">
				<div
					v-if="showAddUser"
					class="fixed inset-0 z-50 flex items-center justify-center p-4"
					style="background: rgba(11, 28, 48, 0.5)"
					@click.self="closeAddUser"
				>
					<div
						class="bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden"
					>
						<!-- Modal header -->
						<div
							class="flex items-center justify-between px-5 py-4 border-b border-outline-variant"
						>
							<div class="flex items-center gap-2">
								<span class="material-symbols-outlined text-primary text-[22px]"
									>person_add</span
								>
								<h3 class="font-headline-md text-on-surface">Find Users</h3>
							</div>
							<button
								@click="closeAddUser"
								class="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-surface-container transition-colors"
							>
								<span class="material-symbols-outlined text-outline text-[20px]"
									>close</span
								>
							</button>
						</div>

						<!-- Search input -->
						<div class="p-4 border-b border-outline-variant">
							<div class="relative">
								<span
									class="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline text-[20px]"
									>search</span
								>
								<input
									ref="addUserInputEl"
									v-model="addUserSearch"
									@input="onAddUserSearch"
									type="text"
									placeholder="Search by name or email..."
									class="w-full pl-9 pr-3 py-2.5 rounded-xl border border-outline-variant bg-surface-container-low text-on-surface placeholder-outline focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 font-body-sm"
								/>
							</div>
						</div>

						<!-- Results -->
						<div class="max-h-72 overflow-y-auto scrollbar-thin">
							<div v-if="addUserResults.length" class="p-2 space-y-1">
								<button
									v-for="u in addUserResults"
									:key="u.uid"
									@click="openConversationAndClose(u)"
									class="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-surface-container text-left transition-colors group"
								>
									<div
										class="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed font-bold flex-shrink-0"
									>
										{{ initials(u.displayName) }}
									</div>
									<div class="min-w-0 flex-1">
										<p
											class="font-body-sm font-semibold text-on-surface truncate"
										>
											{{ u.displayName }}
										</p>
										<p class="font-label-caps text-outline truncate">
											{{ u.email }}
										</p>
									</div>
									<span
										class="ml-auto text-primary font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 flex-shrink-0"
									>
										<span class="material-symbols-outlined text-[16px]"
											>message</span
										>
										Message
									</span>
								</button>
							</div>

							<div
								v-else-if="addUserSearch && !addUserSearching"
								class="py-10 text-center"
							>
								<span class="material-symbols-outlined text-4xl text-outline"
									>person_search</span
								>
								<p class="font-body-sm text-outline mt-2">
									No users found for "{{ addUserSearch }}"
								</p>
							</div>

							<div v-else class="py-10 text-center">
								<span
									class="material-symbols-outlined text-4xl text-outline"
									style="font-variation-settings: &quot;FILL&quot; 1"
									>group</span
								>
								<p class="font-body-sm text-outline mt-2">
									Type a name or email to search
								</p>
							</div>
						</div>
					</div>
				</div>
			</Transition>
		</Teleport>
	</AppLayout>
</template>

<script setup>
import { ref, computed, watch, nextTick, onMounted, onUnmounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import AppLayout from "@/components/layout/AppLayout.vue";
import BinaryInputContainer from "@/components/binary/BinaryInputContainer.vue";
import { useAuthStore } from "@/stores/auth";
import { useChatStore, BOT_UID } from "@/stores/chat";

const authStore = useAuthStore();
const chatStore = useChatStore();
const route = useRoute();
const router = useRouter();

const activeConvId = ref(null);
const messagesEl = ref(null);
const showCheatSheet = ref(false);
const sheetWidth = ref(224); // px, min 180 max 480
const SHEET_MIN = 180;
const SHEET_MAX = 480;

// Font size scales from 9px at min to 16px at max
const sheetFontSize = computed(() =>
	Math.round(
		9 + ((sheetWidth.value - SHEET_MIN) / (SHEET_MAX - SHEET_MIN)) * 7,
	),
);
// Column count: 2 below 280px, 3 above
const sheetCols = computed(() =>
	sheetWidth.value >= 280 ? "repeat(3, 1fr)" : "repeat(2, 1fr)",
);

function startSheetDrag(e) {
	const startX = e.clientX;
	const startW = sheetWidth.value;
	const onMove = (ev) => {
		const delta = startX - ev.clientX; // drag left = wider
		sheetWidth.value = Math.min(SHEET_MAX, Math.max(SHEET_MIN, startW + delta));
	};
	const onUp = () => {
		window.removeEventListener("mousemove", onMove);
		window.removeEventListener("mouseup", onUp);
		document.body.style.cursor = "";
		document.body.style.userSelect = "";
	};
	document.body.style.cursor = "col-resize";
	document.body.style.userSelect = "none";
	window.addEventListener("mousemove", onMove);
	window.addEventListener("mouseup", onUp);
}

const CHEAT_SHEET = [
	{
		label: "A – Z",
		entries: Array.from({ length: 26 }, (_, i) => ({
			char: String.fromCharCode(65 + i),
			bin: (65 + i).toString(2).padStart(8, "0"),
		})),
	},
	{
		label: "a – z",
		entries: Array.from({ length: 26 }, (_, i) => ({
			char: String.fromCharCode(97 + i),
			bin: (97 + i).toString(2).padStart(8, "0"),
		})),
	},
	{
		label: "0 – 9",
		entries: Array.from({ length: 10 }, (_, i) => ({
			char: String.fromCharCode(48 + i),
			bin: (48 + i).toString(2).padStart(8, "0"),
		})),
	},
	{
		label: "Symbols",
		entries: [
			32, 33, 34, 35, 36, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 58, 59, 63,
			64, 91, 93, 95, 123, 125,
		].map((c) => ({
			char: c === 32 ? "SP" : String.fromCharCode(c),
			bin: c.toString(2).padStart(8, "0"),
		})),
	},
];

// Add User modal state
const showAddUser = ref(false);
const addUserSearch = ref("");
const addUserResults = ref([]);
const addUserSearching = ref(false);
const addUserInputEl = ref(null);

// Pinned bot conversation
const botConv = computed(() =>
	chatStore.conversations.find((c) => c.participants?.includes(BOT_UID)),
);

// All non-bot conversations
const regularConvs = computed(() =>
	chatStore.conversations.filter((c) => !c.participants?.includes(BOT_UID)),
);

// Whether the active conversation is with the bot
const isActiveConvBot = computed(() => {
	const conv = chatStore.conversations.find((c) => c.id === activeConvId.value);
	return conv?.participants?.includes(BOT_UID) ?? false;
});

const activeParticipantName = computed(() => {
	const conv = chatStore.conversations.find((c) => c.id === activeConvId.value);
	return conv ? otherParticipantName(conv) : "";
});

function otherParticipantName(conv) {
	const uid = authStore.user?.uid;
	const other = Object.entries(conv.participantDetails || {}).find(
		([id]) => id !== uid,
	);
	return other?.[1]?.displayName ?? "Unknown";
}

function initials(name = "") {
	return name
		.split(" ")
		.map((w) => w[0])
		.join("")
		.slice(0, 2)
		.toUpperCase();
}

async function onAddUserSearch() {
	if (!addUserSearch.value.trim()) {
		addUserResults.value = [];
		return;
	}
	addUserSearching.value = true;
	addUserResults.value = await chatStore.searchUsers(
		addUserSearch.value.trim(),
	);
	addUserSearching.value = false;
}

async function openConversationAndClose(user) {
	closeAddUser();
	const convId = await chatStore.createOrOpenConversation(user.uid);
	router.push(`/chat/${convId}`);
}

function closeAddUser() {
	showAddUser.value = false;
	addUserSearch.value = "";
	addUserResults.value = [];
}

function selectConversation(conv) {
	router.push(`/chat/${conv.id}`);
}

/** Format a raw binary string (no spaces) into spaced 8-bit groups for display. */
function formatBinary(raw) {
	if (!raw) return "";
	const groups = [];
	for (let i = 0; i < raw.length; i += 8) groups.push(raw.slice(i, i + 8));
	return groups.join(" ");
}

async function handleSend(payload) {
	if (!activeConvId.value) return;
	await chatStore.sendMessage({ convId: activeConvId.value, ...payload });
	await nextTick();
	messagesEl.value?.scrollTo({
		top: messagesEl.value.scrollHeight,
		behavior: "smooth",
	});
}

// Focus the search input when the modal opens
watch(showAddUser, async (val) => {
	if (val) {
		await nextTick();
		addUserInputEl.value?.focus();
	}
});

// Watch route param for direct /chat/:id navigation
watch(
	() => route.params.id,
	async (id) => {
		if (id && id !== activeConvId.value) {
			activeConvId.value = id;
			chatStore.stopListeningToMessages();
			chatStore.listenToMessages(id);
		}
	},
	{ immediate: true },
);

// Scroll to bottom when messages arrive
watch(
	() => chatStore.messages.length,
	async () => {
		await nextTick();
		messagesEl.value?.scrollTo({
			top: messagesEl.value.scrollHeight,
			behavior: "smooth",
		});
	},
);

// Auto-open the bot conversation when the chat tab is first loaded with no conv selected
const _botAutoOpened = ref(false);
watch(botConv, (conv) => {
	if (conv && !route.params.id && !_botAutoOpened.value) {
		_botAutoOpened.value = true;
		router.replace(`/chat/${conv.id}`);
	}
});

onMounted(async () => {
	chatStore.listenToConversations();
	// Ensure the bot conversation exists for already-authenticated users
	if (authStore.user) {
		authStore
			.ensureBotSetup(authStore.user)
			.catch((e) => console.error("[BotSetup onMounted]", e));
	}
});
onUnmounted(() => {
	chatStore.stopListeningToConversations();
	chatStore.stopListeningToMessages();
});
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
	transition: opacity 0.15s ease;
}
.modal-enter-from,
.modal-leave-to {
	opacity: 0;
}

.sheet-enter-active,
.sheet-leave-active {
	transition:
		transform 0.2s ease,
		opacity 0.2s ease;
}
.sheet-enter-from,
.sheet-leave-to {
	transform: translateX(100%);
	opacity: 0;
}
</style>
