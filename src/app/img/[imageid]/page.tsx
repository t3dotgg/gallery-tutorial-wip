import FullImageView from "~/app/_components/full-image";

export default function ImagePage(props: { params: { imageid: string } }) {
  return <FullImageView imageid={props.params.imageid} />;
}
