import "@/_styles/globals.scss";
import { Inter } from "next/font/google";
import type { Metadata, Viewport } from "next";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amir Bazgir's Portfolio",
  description: "I'm a fullstack web developer."
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
      <Head>
        <title>Amir Bazgir&apos;s portfolio</title>

        <meta name="title" content="Amir Bazgir's portfolio" />
        <meta name="description" content="I'm a fullstack web developer." />

        {/* Open Graph / Facebook  */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://b-amir.link" />
        <meta property="og:title" content="Amir Bazgir's portfolio" />
        <meta
          property="og:description"
          content="I'm a fullstack web developer."
        />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/b-amir/my-portfolio/main/public/link-preview.png"
        />

        {/* Twitter  */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="http://b-amir.link" />
        <meta property="twitter:title" content="Amir Bazgir's portfolio" />
        <meta
          property="twitter:description"
          content="I'm a fullstack web developer."
        />
        <meta
          property="twitter:image"
          content="https://raw.githubusercontent.com/b-amir/my-portfolio/main/public/link-preview.png"
        />

        {/* favicon and touch icon */}
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          href="/apple-icon.png?ebbb82dc3cc1b5eb"
          type="image/png"
          sizes="512x512"
        />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
