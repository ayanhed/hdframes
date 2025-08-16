import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "HDFrames Productions | Broadcast-Standard Video & Digital Signage Solutions",
    template: "%s | HDFrames Productions",
  },
  description: "Professional video promotional solutions, corporate awards graphics, multi-camera productions, and digital signage services. Broadcast-standard quality from Birmingham, West Midlands.",
  keywords: [
    "video production",
    "broadcast quality",
    "corporate videos",
    "awards ceremony",
    "digital signage",
    "Birmingham",
    "West Midlands",
    "promotional videos",
    "multi-camera production",
    "TV quality",
    "social media content",
  ],
  authors: [{ name: "HDFrames Productions" }],
  creator: "HDFrames Productions",
  publisher: "HDFrames Productions",
  metadataBase: new URL("https://hdframes.co.uk"),
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://hdframes.co.uk",
    siteName: "HDFrames Productions",
    title: "HDFrames Productions | Broadcast-Standard Video & Digital Signage Solutions",
    description: "Professional video promotional solutions, corporate awards graphics, multi-camera productions, and digital signage services. Broadcast-standard quality from Birmingham, West Midlands.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "HDFrames Productions - Broadcast-Standard Video Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HDFrames Productions | Broadcast-Standard Video & Digital Signage Solutions",
    description: "Professional video promotional solutions, corporate awards graphics, multi-camera productions, and digital signage services.",
    images: ["/twitter-image.jpg"],
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased gradient-mesh",
          fontSans.variable,
          fontMono.variable
        )}
      >
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
