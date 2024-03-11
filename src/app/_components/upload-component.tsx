"use client";

import { useRouter } from "next/navigation";
import { UploadButton } from "~/components/uploadthing";

export const UploadComponent = () => {
  const router = useRouter();
  return (
    <UploadButton
      endpoint="imageUploader"
      onClientUploadComplete={() => {
        router.refresh();
      }}
    />
  );
};
