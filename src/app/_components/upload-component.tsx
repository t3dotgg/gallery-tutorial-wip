"use client";

import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useUploadThing } from "~/components/uploadthing";
import { LoadingSpinner } from "./loading-spinner";
import { useEffect } from "react";

// inferred input off useUploadThing
type Input = Parameters<typeof useUploadThing>;

const useUploadThingInputProps = (...args: Input) => {
  const $ut = useUploadThing(...args);

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const selectedFiles = Array.from(e.target.files);
    const result = await $ut.startUpload(selectedFiles);

    console.log("uploaded files", result);
    // TODO: persist result in state maybe?
  };

  return {
    inputProps: {
      onChange,
      multiple: ($ut.permittedFileInfo?.config?.image?.maxFileCount ?? 1) > 1,
      accept: "image/*",
    },
    isUploading: $ut.isUploading,
  };
};

const UploadSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="h-6 w-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
    />
  </svg>
);

export const UploadComponent = () => {
  const router = useRouter();

  const { inputProps } = useUploadThingInputProps("imageUploader", {
    onBeforeUploadBegin: (files) => {
      toast(
        <div className="flex items-center justify-center gap-4">
          <LoadingSpinner />
          {`Uploading ${files.length} files`}
        </div>,
        {
          duration: 40000,
        },
      );

      return files;
    },
    onClientUploadComplete: () => {
      toast.dismiss();
      toast.success("Upload complete!");
      router.refresh();
    },
  });

  return (
    <>
      <label className="m-auto cursor-pointer text-white" htmlFor="file_input">
        <UploadSVG />
      </label>
      <input className="sr-only" id="file_input" type="file" {...inputProps} />
    </>
  );
};
