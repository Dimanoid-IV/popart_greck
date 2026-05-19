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

const CLASSIC_BASE_PROMPT = `Professional digital art portrait in a beautiful painterly style.
Artistic rendering with smooth brushstrokes, soft volume, and elegant lighting.
Expressive artistic eyes, simplified clothing with painterly textures.
A masterpiece of digital painting. Avoid photorealism.`;

const DREAM_ART_BASE_PROMPT = `Professional dream art digital portrait. Painterly face with smooth brushwork and expressive eyes.
Keep the person clearly recognizable. Dream art background only: vivid paint splashes, colorful brush strokes,
acrylic drips and abstract color bursts in pink, magenta, cyan, orange and purple.
High energy fantasy art mood, soft glow, no photorealism, no detailed room or landscape.`;

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
