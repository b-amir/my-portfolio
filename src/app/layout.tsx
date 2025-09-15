import "@/_styles/globals.scss";
import { Open_Sans } from "next/font/google";
import type { Metadata, Viewport } from "next";
import { ClientWrapper } from "@/_components/ClientWrapper";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://b-amir.link"),
  title: "Amir Bazgir's Portfolio",
  description: "I'm a fullstack web developer.",
  openGraph: {
    type: "website",
    url: "http://b-amir.link",
    title: "Amir Bazgir's portfolio",
    description: "I'm a fullstack web developer.",
    images: [
      {
        url: "https://raw.githubusercontent.com/b-amir/my-portfolio/main/public/link-preview.png",
        width: 1200,
        height: 628,
        alt: "Amir Bazgir's portfolio",
      },
    ],
  },
  twitter: {
    title: "Amir Bazgir's portfolio",
    description: "I'm a fullstack web developer.",
    card: "summary_large_image",
    images: [
      {
        url: "https://raw.githubusercontent.com/b-amir/my-portfolio/main/public/link-preview.png",
        width: 1200,
        height: 628,
        alt: "Amir Bazgir's portfolio",
      },
    ],
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#2E2E2E",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
      // className={openSans.className}
      >
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
