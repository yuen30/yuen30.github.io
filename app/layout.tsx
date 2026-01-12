import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Taweechai.dev | Senior Software Developer",
  description: "Senior Developer specializing in ERP, WMS, and Industrial IoT solutions with 10+ years of experience.",
  keywords: "software developer, ERP, WMS, Industrial IoT, NextJS, React, Python, Django, Odoo",
  authors: [{ name: "Taweechai Yuenyang" }],
  creator: "Taweechai Yuenyang",
  publisher: "Taweechai Yuenyang",
  openGraph: {
    type: "website",
    title: "Taweechai.dev | Senior Software Developer",
    description: "Senior Developer specializing in ERP, WMS, and Industrial IoT solutions with 10+ years of experience.",
    url: "https://taweechai.dev",
    siteName: "Taweechai.dev",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Taweechai.dev - Senior Software Developer"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Taweechai.dev | Senior Software Developer",
    description: "Senior Developer specializing in ERP, WMS, and Industrial IoT solutions with 10+ years of experience.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Taweechai Yuenyang",
              "jobTitle": "Senior Software Developer",
              "description": "Senior Developer specializing in ERP, WMS, and Industrial IoT solutions with 10+ years of experience.",
              "url": "https://taweechai.dev",
              "sameAs": [
                "https://github.com/yuen30",
                "https://linkedin.com/in/taweechai-yuenyang"
              ],
              "knowsAbout": [
                "Enterprise Resource Planning (ERP)",
                "Warehouse Management Systems (WMS)",
                "Industrial IoT",
                "NextJS",
                "React",
                "Python",
                "Django",
                "Odoo",
                "Laravel"
              ],
              "alumniOf": [
                {
                  "@type": "CollegeOrUniversity",
                  "name": "Rajabhat Kalasin University"
                }
              ],
              "worksFor": [
                {
                  "@type": "Organization",
                  "name": "VCS Thailand Co., Ltd."
                }
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
