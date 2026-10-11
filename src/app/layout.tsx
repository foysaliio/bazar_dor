import type { Metadata } from "next";
import { Noto_Sans_Bengali } from "next/font/google";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ToastProvider from "@/components/providers/ToastProvider";

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
      <body className="flex min-h-dvh flex-col">
        <ToastProvider />

        <Navbar />

        <div className="flex-1 bg-bazar-bg [&>main]:min-h-0">{children}</div>

        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
