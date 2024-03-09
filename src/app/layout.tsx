import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { Topnav } from "./_components/topnav";
import { ClerkProvider } from "@clerk/nextjs";

import "@uploadthing/react/styles.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`dark ${inter.variable}`}>
          <div className="grid h-screen grid-rows-[auto_1fr] font-sans">
            <Topnav />
            {children}
            {modal}
          </div>
          <div id="modal-root" />
        </body>
      </html>
    </ClerkProvider>
  );
}
