"use client";

import { type ElementRef, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import { XButton } from "~/components/xbutton";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<"dialog">>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  return createPortal(
    // <div className="modal-backdrop m-0 bg-red-200 p-0">
    <dialog
      ref={dialogRef}
      onClose={onDismiss}
      className="m-0 h-screen w-screen bg-zinc-900/80 p-0"
    >
      {children}
      <div className="absolute left-4 top-4">
        <XButton
          onClick={onDismiss}
          // className="absolute left-4 top-4 p-2 text-2xl text-white"
        />
      </div>
    </dialog>,
    document.getElementById("modal-root")!,
  );
}
