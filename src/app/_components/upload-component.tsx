"use client";

import { useRouter } from "next/navigation";
import { useRef } from "react";
import { UploadButton, useUploadThing } from "~/components/uploadthing";

// inferred input off useUploadThing
type Input = Parameters<typeof useUploadThing>;

const useUploadThingInput = (...args: Input) => {
  const $ut = useUploadThing(...args);

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const selectedFiles = Array.from(e.target.files);
    const result = await $ut.startUpload(selectedFiles);
  };

  return {
    handleChange,
    isUploading: $ut.isUploading,
  };
};

export const UploadComponent = () => {
  const router = useRouter();

  const { handleChange } = useUploadThingInput("imageUploader", {
    onClientUploadComplete: () => {
      router.refresh();
    },
  });

  return (
    <>
      <label className="m-auto cursor-pointer text-white" htmlFor="file_input">
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
      </label>
      <input
        className="sr-only"
        id="file_input"
        onChange={handleChange}
        type="file"
      />
    </>
  );
};
