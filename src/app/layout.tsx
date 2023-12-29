import "@/_styles/globals.scss";
import { Inter } from "next/font/google";
import type { Metadata, Viewport } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amir Bazgir's Portfolio",
  description: "I'm a Web developer."
};

export const viewport: Viewport = {
  themeColor: "#2E2E2E"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
