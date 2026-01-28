import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import Providers from "@/components/Providers";
import { getSiteUrl } from "@/siteUrl";
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta",
});

const siteUrl = getSiteUrl();

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Tyler Langties — Software Engineer",
    template: "%s — Tyler Langties",
  },
  description:
    "Personal portfolio showcasing projects, experience, and contact info.",
  applicationName: "Tyler Langties Portfolio",
  authors: [{ name: "Tyler Langties" }],
  creator: "Tyler Langties",
  keywords: [
    "Tyler Langties",
    "software engineer",
    "web development",
    "React",
    "Next.js",
    "TypeScript",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Tyler Langties — Software Engineer",
    description:
      "Personal portfolio showcasing projects, experience, and contact info.",
    siteName: "Tyler Langties",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tyler Langties — Software Engineer",
    description:
      "Personal portfolio showcasing projects, experience, and contact info.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <body className={plusJakarta.className}>
        <SpeedInsights />
        {/* MUI App Router SSR cache provider */}
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <Providers>{children}</Providers>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
