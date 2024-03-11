import { SignInButton, SignedIn, UserButton, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { UploadComponent } from "./upload-component";

export const Topnav = () => {
  return (
    <div className="flex min-h-0 justify-between border-b p-4 text-2xl shadow-xl">
      <Link href="/">Gallery</Link>

      <div className="flex gap-6 text-base">
        <SignedIn>
          <UploadComponent />
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
        <SignedOut>
          <SignInButton />
        </SignedOut>
      </div>
    </div>
  );
};
