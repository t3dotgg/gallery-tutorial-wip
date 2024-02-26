import FullImageView from "~/app/_components/full-image";
import { Modal } from "~/app/_components/modal";

export default async function ImagePage(props: {
  params: { imageid: string };
}) {
  return (
    <Modal>
      <FullImageView imageid={props.params.imageid} />
    </Modal>
  );
}
