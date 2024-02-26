import { UserButton } from "@clerk/nextjs";

export const Topnav = () => {
  return (
    <div className="flex min-h-0 justify-between border-b p-4 text-2xl shadow-xl">
      Gallery <UserButton afterSignOutUrl="/" />
    </div>
  );
};
