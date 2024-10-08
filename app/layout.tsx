import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopNavbar from "@/components/TopNavbar";
import DematButton from "@/components/DematButton";
import DownloadAppComponent from "@/components/BottomSection";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopNavbar />
        <DematButton />
        {children}
        <div className="flex justify-center">
        <DownloadAppComponent />
        </div>
      </body>
    </html>
  );
}
