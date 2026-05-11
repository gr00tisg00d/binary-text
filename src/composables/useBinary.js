import { ref, computed } from "vue";

/**
 * Composable that manages binary bit input and live decoding.
 *
 * Interaction model:
 *  - User presses BinaryButton("0") or BinaryButton("1").
 *  - Every completed 8-bit group is immediately decoded to a character.
 *  - Backspace removes the last bit (and the last decoded char if a byte was completed).
 *  - Clear resets everything.
 */
export function useBinary() {
	/** @type {import('vue').Ref<string[]>} */
	const bits = ref([]);
	const decodedText = ref("");

	// ── Derived state ────────────────────────────────────────────────

	/** All bits as a single string ("0110100101…") */
	const binaryString = computed(() => bits.value.join(""));

	/**
	 * Completed bytes only, grouped in 8, joined by spaces for display.
	 */
	const bitDisplay = computed(() => {
		const completedCount = bits.value.length - (bits.value.length % 8);
		const all = bits.value.slice(0, completedCount).join("");
		const groups = [];
		for (let i = 0; i < all.length; i += 8) {
			groups.push(all.slice(i, i + 8));
		}
		return groups.join(" ");
	});

	/** Bits of the current incomplete byte (0–7 chars) */
	const pendingBits = computed(() => {
		const excess = bits.value.length % 8;
		return bits.value.slice(-excess || bits.value.length).join("");
	});

	/** Number of complete characters decoded so far */
	const charCount = computed(() => decodedText.value.length);

	// ── Mutation helpers ─────────────────────────────────────────────

	/** Press a binary button ('0' or '1'). */
	function addBit(bit) {
		bits.value = [...bits.value, bit];

		// When we complete a byte, decode as ASCII
		if (bits.value.length % 8 === 0) {
			const byteStr = bits.value.slice(-8).join("");
			const code = parseInt(byteStr, 2);
			// Only append printable ASCII characters (space through ~)
			if (code >= 32 && code <= 126) {
				decodedText.value += String.fromCharCode(code);
			}
		}
	}

	/** Remove the last bit (and last decoded char if it completed a byte). */
	function backspace() {
		if (bits.value.length === 0) return;

		const wasCompleteByte = bits.value.length % 8 === 0;
		if (wasCompleteByte) {
			// Check if the completed byte produced a visible character
			const byteStr = bits.value.slice(-8).join("");
			const code = parseInt(byteStr, 2);
			if (code >= 32 && code <= 126) {
				decodedText.value = decodedText.value.slice(0, -1);
			}
		}
		bits.value = bits.value.slice(0, -1);
	}

	/** Reset the entire input buffer. */
	function clear() {
		bits.value = [];
		decodedText.value = "";
	}

	return {
		bits,
		decodedText,
		binaryString,
		bitDisplay,
		pendingBits,
		charCount,
		addBit,
		backspace,
		clear,
	};
}
