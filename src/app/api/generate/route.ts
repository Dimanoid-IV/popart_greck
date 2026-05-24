import { NextRequest, NextResponse } from "next/server";
import {
  DEFAULT_ART_STYLE,
  getBasePrompt,
  isArtStyle,
  pickBackgrounds,
} from "@/lib/generation-styles";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const token = process.env.NANOBANANA_API_KEY;
  if (!token) {
    return NextResponse.json(
      { error: "NANOBANANA_API_KEY is missing" },
      { status: 500 }
    );
  }

  try {
    const body = await req.json();
    const { image, style: styleRaw } = body;

    if (!image) {
      return NextResponse.json({ error: "Image is required" }, { status: 400 });
    }

    const style = isArtStyle(styleRaw) ? styleRaw : DEFAULT_ART_STYLE;
    const basePrompt = getBasePrompt(style);
    const selectedBackgrounds = pickBackgrounds(style, 2);

    const baseUrl = "https://api.nanobananaapi.ai/api/v1/nanobanana";

    const tasks = await Promise.all(
      selectedBackgrounds.map(async (bg) => {
        const fullPrompt = `${basePrompt} Background: ${bg}. Artistic masterpiece, high quality painted portrait, recognizable same person with visible brushwork.`;

        let processedImage = image;

        const imgbbKey = process.env.IMGBB_API_KEY;
        if (imgbbKey && image.startsWith("data:")) {
          try {
            const base64Data = image.split(",")[1];
            const formData = new FormData();
            formData.append("image", base64Data);
            const imgbbRes = await fetch(
              `https://api.imgbb.com/1/upload?key=${imgbbKey}`,
              {
                method: "POST",
                body: formData,
              }
            );
            const imgbbData = await imgbbRes.json();
            if (imgbbData.success) {
              processedImage = imgbbData.data.url;
            }
          } catch (e) {
            console.error("ImgBB Upload failed:", e);
          }
        }

        const genRes = await fetch(`${baseUrl}/generate`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            prompt: fullPrompt,
            type: "IMAGETOIAMGE",
            numImages: 1,
            imageUrls: [processedImage],
            image_size: "2:3",
            callBackUrl: `${req.nextUrl.origin}/api/webhooks/dummy`,
          }),
        });

        const genData = await genRes.json();
        if (genRes.status !== 200 || genData.code !== 200) {
          console.error(
            "NanoBanana API Error Details:",
            JSON.stringify(genData, null, 2)
          );
          throw new Error(
            genData.msg || `Generation initiation failed (Status ${genRes.status})`
          );
        }

        return genData.data.taskId;
      })
    );

    return NextResponse.json({ taskIds: tasks, style });
  } catch (error: unknown) {
    console.error("Generation Error:", error);
    const message =
      error instanceof Error ? error.message : "Failed to generate images";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
