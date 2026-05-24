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
  "Abstract multicolor ink splatter and dry brush strokes behind the head, electric blue and gold accents",
  "Bold acrylic drips and sweeping marks behind the shoulders, pink, purple and teal",
  "Luminous color clouds with soft glow behind the portrait, fantasy atmosphere, no scenery",
  "Expressive rainbow paint swirls and watercolor bursts behind the subject",
] as const;

const EYE_HIGHLIGHTS =
  "Bright natural catchlights and glossy sparkles in both eyes — same eye shape and gaze direction as the reference, lively reflections with a painted finish.";

/** Highest priority: same person; stylization must follow their geometry. */
const LIKENESS_OPENING = `PRIORITY — FACIAL LIKENESS FROM REFERENCE PHOTO:
Image-to-image portrait of the exact same person. Family and friends must recognize them immediately.
Preserve accurately: overall face shape, eye shape/size/spacing, nose, lips, jawline, chin, cheekbones, eyebrows, skin tone, hairline, and age.
Painted artistic style is required, but anatomy and identity must match the upload — never a new face, never a generic model, no face swap.`;

const LIKENESS_CLOSING = `Remember: beautiful painted artwork AND unmistakable likeness to the reference person — identity is non-negotiable.`;

const CLASSIC_BASE_PROMPT = `${LIKENESS_OPENING}
Professional digital art portrait in a beautiful painterly style.
Visible brushstrokes on face and skin, soft volume, elegant lighting — stylized paint texture that follows this person's real features.
${EYE_HIGHLIGHTS}
Painterly clothing and background. Masterpiece digital painting, clearly illustrated not a raw photo.
${LIKENESS_CLOSING}`;

const DREAM_ART_BASE_PROMPT = `${LIKENESS_OPENING}
Professional dream art digital portrait — painterly face with smooth brushwork, clearly artwork not an unedited photo.
${EYE_HIGHLIGHTS}
Bold dream art behind the subject: vivid paint splashes, brush strokes, acrylic drips in pink, magenta, cyan, orange and purple.
A few very subtle translucent paint flecks on cheek edges, temple or hair only — never over eyes, nose or mouth; likeness always wins over effects.
Soft glow, fantasy mood, no room scenery.
${LIKENESS_CLOSING}`;

export function pickBackgrounds(style: ArtStyle, count = 2): string[] {
  const pool =
    style === "dream-art" ? [...DREAM_ART_BACKGROUNDS] : [...CLASSIC_BACKGROUNDS];
  return pool.sort(() => 0.5 - Math.random()).slice(0, count);
}

export function getBasePrompt(style: ArtStyle): string {
  return style === "dream-art" ? DREAM_ART_BASE_PROMPT : CLASSIC_BASE_PROMPT;
}

export function buildGenerationPrompt(style: ArtStyle, background: string): string {
  return `${getBasePrompt(style)} Background: ${background}. Painted portrait masterpiece, high quality, maximum recognizable likeness to the uploaded person.`;
}

export function isArtStyle(value: unknown): value is ArtStyle {
  return value === "classic" || value === "dream-art";
}
