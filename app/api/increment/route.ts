import { kv } from "@vercel/kv";
import { NextRequest, NextResponse } from "next/server";

// const namespace = new kv.namespace({ id: "vvart-view-counts" });
export const runtime = "edge"

export async function POST(req: NextRequest): Promise<NextResponse> {
  if (req.headers.get("Content-Type") !== "application/json") {
    return new NextResponse("must be json", { status: 400 });
  }

  const body = await req.json();
  let slug: string | undefined = undefined;
  if ("slug" in body) {
    slug = body.slug;
  }
  if (!slug) {
    return new NextResponse("Slug not found", { status: 400 });
  }
  // const ip = req.ip;
  const ip = (req.headers.get('x-forwarded-for') ??  req.headers.get('x-real-ip') ?? '127.0.0.1').split(',')[0]

  if (ip) {
    // Hash the IP in order to not store it directly in your db.
    const buf = await crypto.subtle.digest(
      "SHA-256",
      new TextEncoder().encode(ip),
    );
    const hash = Array.from(new Uint8Array(buf))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");

    // deduplicate the ip for each slug
    const isNew = await kv.set(
      ["deduplicate", hash, slug].join(":"),
      "true",
      { ex: 24 * 60 * 60 },
    );
    if (!isNew) {
      new NextResponse(null, { status: 202 });
    }
  }
  const pageviewsKey = ["pageviews", "guides", slug].join(":");
  const currentValue = await kv.get(pageviewsKey);
  const newValue = currentValue ? parseInt(currentValue as string) + 1 : 1;
  await kv.set(pageviewsKey, newValue.toString());
  return new NextResponse(null, { status: 202 });
}
