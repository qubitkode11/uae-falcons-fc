import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingJoin from "../components/FloatingJoin";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const milker = localFont({
  src: "./fonts/Milker.otf",
  variable: "--font-milker",
});

export const metadata: Metadata = {
  title: "USA Falcons FC",
  description: "USA Falcons AC - Elite Football Development Program",
  icons: {
    icon: '/USA-Falcon-Logo.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${milker.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
        <FloatingJoin />
      </body>
    </html>
  );
}
