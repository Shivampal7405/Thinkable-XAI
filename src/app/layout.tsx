import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thinkable XAi - AI Solutions & Automation Experts",
  description: "Transform your business with cutting-edge AI solutions. From chatbots to RAG pipelines, we deliver enterprise-grade AI automation tailored to your needs.",
  keywords: "AI, artificial intelligence, automation, chatbot, RAG pipeline, machine learning, business automation",
  authors: [{ name: "Thinkable XAi" }],
  creator: "Thinkable XAi",
  publisher: "Thinkable XAi",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://thinkable-xai.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Thinkable XAi - AI Solutions & Automation Experts",
    description: "Transform your business with cutting-edge AI solutions. From chatbots to RAG pipelines, we deliver enterprise-grade AI automation.",
    url: "https://thinkable-xai.com",
    siteName: "Thinkable XAi",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Thinkable XAi - AI Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thinkable XAi - AI Solutions & Automation Experts",
    description: "Transform your business with cutting-edge AI solutions.",
    images: ["/og-image.jpg"],
    creator: "@thinkable_xai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider defaultTheme="light" storageKey="thinkable-xai-theme">
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
