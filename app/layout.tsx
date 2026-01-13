import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { Analytics } from "@/components/Analytics";

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
  keywords: "software developer, ERP, WMS, Industrial IoT, NextJS, React, Python, Django, Odoo, Thailand, ทวีชัย ยืนยั่ง",
  authors: [{ name: "Taweechai Yuenyang", url: "https://taweechai.dev" }],
  creator: "Taweechai Yuenyang",
  publisher: "Taweechai Yuenyang",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://taweechai.dev'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'th-TH': '/th-TH',
    },
  },
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
        alt: "Taweechai.dev - Senior Software Developer Portfolio"
      }
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Taweechai.dev | Senior Software Developer",
    description: "Senior Developer specializing in ERP, WMS, and Industrial IoT solutions with 10+ years of experience.",
    images: ["/og-image.jpg"],
    creator: "@taweechai_dev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
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
              "alternateName": "ทวีชัย ยืนยั่ง",
              "jobTitle": "Senior Software Developer",
              "description": "Senior Developer specializing in ERP, WMS, and Industrial IoT solutions with 10+ years of experience.",
              "url": "https://taweechai.dev",
              "email": "taweechai.yue@outlook.co.th",
              "telephone": "+66-66-109-0602",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Chachoengsao",
                "addressCountry": "Thailand"
              },
              "sameAs": [
                "https://github.com/yuen30",
                "https://github.com/abe27",
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
                "Laravel",
                "PLC Integration",
                "WebSocket",
                "Docker",
                "CI/CD",
                "System Architecture"
              ],
              "hasOccupation": {
                "@type": "Occupation",
                "name": "Senior Software Developer",
                "occupationLocation": {
                  "@type": "Country",
                  "name": "Thailand"
                },
                "skills": [
                  "Full-Stack Development",
                  "System Architecture",
                  "Industrial IoT",
                  "ERP/WMS Development",
                  "DevOps"
                ]
              },
              "alumniOf": [
                {
                  "@type": "CollegeOrUniversity",
                  "name": "Rajabhat Kalasin University",
                  "alternateName": "มหาวิทยาลัยราชภัฏกาฬสินธุ์"
                }
              ],
              "worksFor": [
                {
                  "@type": "Organization",
                  "name": "VCS Thailand Co., Ltd.",
                  "startDate": "2023-03"
                }
              ],
              "award": [
                "Power Automate Professional Certification",
                "10+ Years Experience in Enterprise Systems"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ErrorBoundary>
          <ThemeProvider>
            {children}
            <Analytics />
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
