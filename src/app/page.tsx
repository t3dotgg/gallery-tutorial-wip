import { getImages } from "~/server/data-layer";
import { ImageGrid } from "./_components/image-grid";

export const dynamic = "force-dynamic";

async function safeFetch() {
  try {
    return { data: await getImages() } as const;
  } catch (e) {
    console.error("err", e);
    return { error: "Failed to get images" } as const;
  }
}

export default async function HomePage() {
  const { data, error } = await safeFetch();

  if (error) {
    return <div>ERROR</div>;
  }

  return (
    <main className="overflow-y-auto">
      <ImageGrid images={data} />
    </main>
  );
}
