import { SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { UploadButton } from "~/components/uploadthing";

export const Topnav = () => {
  return (
    <div className="flex min-h-0 justify-between border-b p-4 text-2xl shadow-xl">
      <Link href="/">Gallery</Link>

      <div>
        <SignedIn>
          <UploadButton endpoint="imageUploader" />
        </SignedIn>
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};
