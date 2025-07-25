import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/layouts/Header";
import HeaderMobile from "@/components/layouts/Header-Mobile";

import MegaMenu from "@/components/layouts/Mega-Menu";
import Footer from "@/components/layouts/Footer";
import CartProvider from "@/components/ui/Button/CartProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lamp e-coomerse",
  description: "Created by mVi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <CartProvider>
          <Header />
          <HeaderMobile />
          <MegaMenu />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
