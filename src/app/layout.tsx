import type { Metadata } from "next";
import { Noto_Sans_Bengali } from "next/font/google";

import Navbar from "@/components/layout/Navbar";

import "./globals.css";

const notoSansBengali = Noto_Sans_Bengali({
  variable: "--font-noto-bengali",
  subsets: ["bengali", "latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "বাজার দর",
    template: "%s | বাজার দর",
  },
  description:
    "বাংলাদেশের নিত্যপ্রয়োজনীয় পণ্যের বর্তমান বাজারদর এক নজরে দেখুন।",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: Readonly<RootLayoutProps>) => {
  return (
    <html lang="bn" className={`${notoSansBengali.variable} antialiased`}>
      <body>
        <Navbar />

        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
