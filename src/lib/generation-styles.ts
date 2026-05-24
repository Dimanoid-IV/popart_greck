export type ArtStyle = "classic" | "dream-art";

export const DEFAULT_ART_STYLE: ArtStyle = "classic";

const CLASSIC_BACKGROUNDS = [
  "Pastel gradient with soft light",
  "Watercolor washes, light and airy",
  "Abstract brushstrokes",
  "Soft colored mist",
  "Canvas texture with light strokes",
] as const;

const DREAM_ART_BACKGROUNDS = [
  "Vibrant paint splashes in magenta, cyan and orange radiating behind the subject, dream art style",
  "Abstract multicolor ink splatter and dry brush strokes, electric blue and gold accents",
  "Bold acrylic paint drips and sweeping brush marks in pink, purple and teal",
  "Luminous color clouds with soft glow, fantasy dream art atmosphere, no scenery",
  "Expressive rainbow paint swirls and watercolor bursts behind the portrait",
] as const;

/** Shared identity lock for img2img — face must match the uploaded photo. */
const LIKENESS_INSTRUCTION = `CRITICAL — preserve exact facial identity from the reference photo.
The same person must stay instantly recognizable: keep face shape, eye shape and spacing, nose, mouth, lips, jawline, cheekbones, eyebrows, hairline, skin tone, and apparent age.
Do not replace the face, do not change gender, ethnicity, or bone structure. No face swap, no heavy beautification, no cartoon distortion of features.
Apply painterly style lightly on the face only; facial proportions and unique traits must remain accurate and faithful to the source image.`;

const CLASSIC_BASE_PROMPT = `${LIKENESS_INSTRUCTION}
Professional digital portrait painting on canvas. Soft artistic brushstrokes and elegant lighting on clothing and background.
Natural-looking eyes that match the reference photo. Painterly textures on clothes and backdrop only — not on altering facial geometry.
High-quality portrait art with strong likeness to the uploaded person.`;

const DREAM_ART_BASE_PROMPT = `${LIKENESS_INSTRUCTION}
Professional dream art portrait. Keep the face photorealistic-to-natural and fully recognizable; apply dream art ONLY in the background behind the subject.
Background: vivid paint splashes, colorful brush strokes, acrylic drips and abstract color bursts in pink, magenta, cyan, orange and purple.
No paint splashes covering or reshaping the face. Soft glow around the silhouette, fantasy mood, no detailed room or landscape.`;

export function pickBackgrounds(style: ArtStyle, count = 2): string[] {
  const pool =
    style === "dream-art" ? [...DREAM_ART_BACKGROUNDS] : [...CLASSIC_BACKGROUNDS];
  return pool.sort(() => 0.5 - Math.random()).slice(0, count);
}

export function getBasePrompt(style: ArtStyle): string {
  return style === "dream-art" ? DREAM_ART_BASE_PROMPT : CLASSIC_BASE_PROMPT;
}

export function isArtStyle(value: unknown): value is ArtStyle {
  return value === "classic" || value === "dream-art";
}
