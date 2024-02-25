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
      <Image src={imageData.url} alt={imageData.name} />
    </Modal>
  );
}
