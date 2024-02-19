import { revalidateTag } from "next/cache";

export const dynamic = "force-dynamic"; // defaults to auto
export async function GET(request: Request) {
  revalidateTag("paintings");
  return Response.json({ message: "Revalidated" });
}
