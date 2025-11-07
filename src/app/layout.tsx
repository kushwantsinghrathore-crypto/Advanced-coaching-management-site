import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://studyasan.com"),
  title: "StudyAsan – The Path to Success",
  description: "India’s most advanced coaching management platform empowering students to achieve success easily.",
  keywords: [
    "StudyAsan",
    "Coaching",
    "Education",
    "Online Learning",
    "Success",
    "Management",
    "Study Platform",
  ],
  themeColor: "#1679fa",

  // ✅ Open Graph for WhatsApp, Facebook, LinkedIn, Telegram, Instagram, Discord
  openGraph: {
    title: "StudyAsan – The Path to Success",
    description:
      "Empowering students through smart coaching management and next-gen learning tools.",
    url: "https://studyasan.com",
    siteName: "StudyAsan",
    images: [
      {
        url: "/SA_logo1.jpg", // Use your main logo or a social preview image (1200x630 recommended)
        width: 1200,
        height: 630,
        alt: "StudyAsan Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ Twitter (X) card for professional previews
  twitter: {
    card: "summary_large_image",
    title: "StudyAsan – The Path to Success",
    description:
      "Smart coaching management platform designed to simplify student success.",
    creator: "@studyasan", // (optional: your future Twitter handle)
    images: ["/SA_logo1.jpg"],
  },

  // ✅ Default favicon / app icon
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  // ✅ Ensure search engines index your site
  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
