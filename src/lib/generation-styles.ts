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
  "Vibrant paint splashes in magenta, cyan and orange radiating behind the subject, a few light splashes on cheek edges, dream art style",
  "Abstract multicolor ink splatter and dry brush strokes, subtle color flecks on hair and jawline, electric blue and gold accents",
  "Bold acrylic drips behind the head with small paint touches on the shoulder and temple, pink, purple and teal",
  "Luminous color clouds with soft glow, faint brush accents on the outer face contour, fantasy atmosphere, no scenery",
  "Expressive rainbow paint swirls behind the portrait, delicate color splashes grazing the cheeks and hair",
] as const;

const EYE_HIGHLIGHTS =
  "Bright natural catchlights and glossy sparkles in both eyes, lively eye reflections, painted but luminous gaze.";

/** Balance: visible painted style + same recognizable person as the upload. */
const LIKENESS_INSTRUCTION = `The result must be the same recognizable person as in the reference photo — keep face shape, eye placement, nose, mouth, jawline, and age.
Apply clear artistic painting on the face (visible brushstrokes, painted skin, soft volume) but do not change bone structure, swap identity, or turn into a different person.`;

const CLASSIC_BASE_PROMPT = `${LIKENESS_INSTRUCTION}
Professional digital art portrait in a beautiful painterly style.
Artistic rendering with smooth brushstrokes on face and skin, soft volume, and elegant lighting.
${EYE_HIGHLIGHTS}
Expressive artistic eyes with painted texture, simplified clothing with painterly brushwork.
A masterpiece of digital painting — clearly illustrated, not a plain photograph, yet instantly recognizable as the person in the source image.`;

const DREAM_ART_BASE_PROMPT = `${LIKENESS_INSTRUCTION}
Professional dream art digital portrait with a painterly stylized face — smooth brushwork and expressive painted eyes, clearly artwork not a raw photo.
${EYE_HIGHLIGHTS}
Dream art background: vivid paint splashes, colorful brush strokes, acrylic drips and abstract bursts in pink, magenta, cyan, orange and purple.
Allow a few subtle paint splashes and color accents lightly on the face — cheeks, temple, hairline or jaw — but sparingly; never cover the eyes, nose, or mouth. Features stay readable and recognizable.
Soft glow, fantasy mood, no detailed room or landscape.`;

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
