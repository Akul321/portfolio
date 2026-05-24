import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Akul — AI × Finance Builder",
  description:
    "Full-stack developer focused on AI-powered simulators, agentic systems, and tools that make markets and routines more intelligible.",
  metadataBase: new URL("https://akul321.vercel.app"),
  openGraph: {
    title: "Akul — AI × Finance Builder",
    description:
      "Full-stack developer focused on AI-powered simulators, agentic systems, and tools that make markets and routines more intelligible.",
    images: ["/og-image.png"],
    type: "website",
    siteName: "Akul Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akul — AI × Finance Builder",
    description:
      "Full-stack developer focused on AI-powered simulators, agentic systems, and tools that make markets and routines more intelligible.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0B",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
