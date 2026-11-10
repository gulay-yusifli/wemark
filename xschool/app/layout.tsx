import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const firs = localFont({
  src: [
    { path: "./fonts/TTFirsNeue-Regular.ttf", weight: "400" },
    { path: "./fonts/TTFirsNeue-Medium.ttf", weight: "500" },
  ],
  variable: "--font-display",
  display: "swap",
});

const hoves = localFont({
  src: [
    { path: "./fonts/TTHoves-Regular.otf", weight: "400" },
    { path: "./fonts/TTHoves-Medium.otf", weight: "500" },
  ],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "WM xSchool — Find your X",
  description:
    "WM xSchool is a selective learning space for ambitious marketing professionals ready to step into leadership.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${firs.variable} ${hoves.variable}`}>
      <body>{children}</body>
    </html>
  );
}
