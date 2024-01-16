import { UserButton } from "@clerk/nextjs";

export const Topnav = () => {
  return (
    <div className="flex min-h-0 justify-between bg-zinc-900 p-4 text-2xl shadow-xl">
      Gallery <UserButton afterSignOutUrl="/" />
    </div>
  );
};
