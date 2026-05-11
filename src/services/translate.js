/**
 * Translates text using the Google Cloud Translation REST API.
 * Returns null if no API key is configured or if the target language is English.
 *
 * @param {string} text - The plain text to translate.
 * @param {string} targetLanguage - BCP-47 language code (e.g. "es", "fr", "ja").
 * @returns {Promise<string|null>}
 */
export async function translateText(text, targetLanguage) {
	const apiKey = import.meta.env.VITE_GOOGLE_TRANSLATE_API_KEY;

	if (!apiKey || !text.trim() || targetLanguage === "en") {
		return null;
	}

	const url = `https://translation.googleapis.com/language/translate/v2?key=${encodeURIComponent(apiKey)}`;

	const response = await fetch(url, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			q: text,
			target: targetLanguage,
			format: "text",
		}),
	});

	if (!response.ok) {
		const body = await response.text();
		throw new Error(`Translation API error ${response.status}: ${body}`);
	}

	const data = await response.json();
	return data?.data?.translations?.[0]?.translatedText ?? null;
}

export const SUPPORTED_LANGUAGES = [
	{ code: "en", label: "English" },
	{ code: "es", label: "Spanish" },
	{ code: "fr", label: "French" },
	{ code: "de", label: "German" },
	{ code: "pt", label: "Portuguese" },
	{ code: "it", label: "Italian" },
	{ code: "ja", label: "Japanese" },
	{ code: "ko", label: "Korean" },
	{ code: "zh", label: "Chinese (Simplified)" },
	{ code: "ar", label: "Arabic" },
	{ code: "hi", label: "Hindi" },
	{ code: "ru", label: "Russian" },
];
