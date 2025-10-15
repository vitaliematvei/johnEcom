import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

import Header from '@/components/layouts/Header';
import HeaderMobile from '@/components/layouts/Header-Mobile';

import MegaMenu from '@/components/layouts/Mega-Menu';
import Footer from '@/components/layouts/Footer';
import CartProvider from '@/components/ui/Button/CartProvider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Lamp e-coomerse',
  description: 'Created by mVi',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#BFFF00]`}
      >
        <CartProvider>
          <Header />
          <HeaderMobile />
          <MegaMenu />
          {children}
          <Footer />
        </CartProvider>

        {/* Start of Tawk.to Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
      var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
      (function(){
        var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
        s1.async=true;
        s1.src='https://embed.tawk.to/68c7be90470c3c1922eedad6/1j5640pg6';
        s1.charset='UTF-8';
        s1.setAttribute('crossorigin','*');
        s0.parentNode.insertBefore(s1,s0);
      })();
    `,
          }}
        />
        {/* End of Tawk.to Script */}
      </body>
    </html>
  );
}
