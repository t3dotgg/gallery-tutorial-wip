import Image from "next/image";
import { Modal } from "~/app/_components/modal";
import { db } from "~/server/db";

export default async function ImagePage(props: {
  params: { imageid: string };
}) {
  const imageData = await db.query.images.findFirst({
    where: (images, { eq }) => {
      return eq(images.id, parseInt(props.params.imageid));
    },
  });

  if (!imageData) {
    return <div>Image not found</div>;
  }

  return (
    <Modal>
      <div className="flex h-full w-full p-0">
        <div className="relative min-w-0 grow">
          <Image
            src={imageData.url}
            alt={imageData.name}
            fill
            objectFit="contain"
          />
        </div>

        <div className="flex w-72 min-w-0 flex-col border-l bg-black text-white">
          <div className="border-b p-2 text-center text-xl">
            {imageData.name}
          </div>
        </div>
      </div>
    </Modal>
  );
}
