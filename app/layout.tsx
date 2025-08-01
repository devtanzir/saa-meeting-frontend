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

export const metadata: Metadata = {
  title: "Scaleup Meeting Scheduler",
  description:
    "Streamline your client meetings with intelligent scheduling and timezone management",
  keywords:
    "meeting scheduler, timezone management, client scheduling,business meeting, professional calendar, scheduling tool, office meeting setup, modern planner",
  robots: "index, follow",
  openGraph: {
    title: "Scaleup Meeting Scheduler",
    description:
      "Streamline your client meetings with intelligent scheduling and timezone management",
    url: "https://saa-meeting-frontend.vercel.app/",
    siteName: "Scaleup Meeting Scheduler",
    images: [
      {
        url: "https://saa-meeting-frontend.vercel.app/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scaleup Meeting Scheduler",
    description:
      "Streamline your client meetings with intelligent scheduling and timezone management",
    images: ["https://saa-meeting-frontend.vercel.app/og-image.png"],
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
