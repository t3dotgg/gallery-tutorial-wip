"use client";

import Image from "next/image";
import { useEffect } from "react";
import { create } from "zustand";

type GalleryState = {
  fullScreenImage: number | undefined;
  setFullScreenImage: (id: number) => void;
  clearFullScreenImage: () => void;
};

const useGalleryState = create<GalleryState>((set) => ({
  fullScreenImage: undefined,
  setFullScreenImage: (id: number) => set({ fullScreenImage: id }),
  clearFullScreenImage: () => set({ fullScreenImage: undefined }),
}));

import type { getImages } from "~/server/data-layer";
type Images = Awaited<ReturnType<typeof getImages>>;

export function ImageGrid(props: { images: Images }) {
  const store = useGalleryState();

  const fullScreenImage = props.images.find(
    (i) => i.id === store.fullScreenImage,
  );

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {props.images.map((image) => (
        <button
          key={image.id}
          className="flex w-60 flex-col justify-between"
          onClick={() => store.setFullScreenImage(image.id)}
        >
          <div className="relative h-44 w-60">
            <Image
              alt={image.name}
              src={image.url}
              fill
              className="object-cover"
            />
          </div>
          <div>{image.name}</div>
        </button>
      ))}

      {fullScreenImage && <FullScreenImage image={fullScreenImage} />}
    </div>
  );
}

function FullScreenImage(props: { image: Images[number] }) {
  const { clearFullScreenImage } = useGalleryState();

  useEffect(() => {
    const handleEscPress = (e: KeyboardEvent) => {
      console.log("e", e.key);
      if (e.key === "Escape") {
        clearFullScreenImage();
      }
    };
    window.addEventListener("keydown", handleEscPress);
    return () => window.removeEventListener("keydown", handleEscPress);
  });

  return (
    <div className="absolute right-0 top-0 flex h-screen w-screen flex-col justify-center bg-black/80">
      <Image
        alt={props.image.name}
        src={props.image.url}
        fill
        className="object-contain"
      />
    </div>
  );
}
