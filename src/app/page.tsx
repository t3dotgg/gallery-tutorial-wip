import { getImagesByUserId } from "~/server/data-layer";
import { ImageGrid } from "./_components/image-grid";
import { auth } from "@clerk/nextjs/server";

export const dynamic = "force-dynamic";

async function safeFetch(userId: string) {
  try {
    return { data: await getImagesByUserId(userId) } as const;
  } catch (e) {
    console.error("err", e);
    return { error: "Failed to get images" } as const;
  }
}

export default async function HomePage() {
  const userId = auth()?.userId;
  if (!userId) {
    return <div>Sign in above</div>;
  }

  const { data, error } = await safeFetch(userId);

  if (error) {
    return <div>ERROR</div>;
  }

  return (
    <main className="overflow-y-auto">
      <ImageGrid images={data} />
    </main>
  );
}
