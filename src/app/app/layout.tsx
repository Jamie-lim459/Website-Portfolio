import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolite — Modern Websites & Online Presence",
  description:
    "Modern websites built to make your business look professional, get found online, and turn visitors into customers.",
};

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${plusJakartaSans.variable} antialiased`}
    >
      <body className="bg-[#050505] text-neutral-200">{children}</body>
    </html>
  );
}