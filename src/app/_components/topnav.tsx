import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export const Topnav = () => {
  return (
    <div className="flex min-h-0 justify-between border-b p-4 text-2xl shadow-xl">
      <Link href="/">Gallery</Link>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};
