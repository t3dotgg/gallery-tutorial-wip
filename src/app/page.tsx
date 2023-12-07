import { getImages } from "~/server/data-layer";
import { ImageGrid } from "./_components/image-grid";

async function safeFetch() {
  try {
    return { data: await getImages() } as const;
  } catch (e) {
    return { error: "Failed to get images" } as const;
  }
}

export default async function HomePage() {
  const { data, error } = await safeFetch();

  if (error) {
    return <div>ERROR</div>;
  }

  return (
    <main className="p-12">
      <ImageGrid images={data} />
    </main>
  );
}
