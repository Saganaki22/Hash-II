import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Hash | Base64 & AES-256 Encoder/Decoder",
  description:
    "Encode and decode text using Base64 and AES-256 encryption. A powerful tool for secure text encoding and decoding with password protection.",
  manifest: "/manifest.json",
  authors: [
    {
      name: "DrBaph",
      url: "https://drbaph.xyz",
    },
  ],
  keywords: [
    "Base64",
    "AES-256",
    "encryption",
    "decryption",
    "encoder",
    "decoder",
    "cryptography",
    "security",
    "PBKDF2",
    "hash",
  ],
  creator: "DrBaph",
  publisher: "DrBaph",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hash.drbaph.xyz",
    title: "Hash | Base64 & AES-256 Encoder/Decoder",
    description: "A powerful tool for secure text encoding and decoding with Base64 and AES-256 encryption.",
    siteName: "Hash",
    images: [
      {
        url: "/hash-og.png",
        width: 1200,
        height: 630,
        alt: "Hash - Base64 & AES-256 Encoder/Decoder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hash | Base64 & AES-256 Encoder/Decoder",
    description: "A powerful tool for secure text encoding and decoding with Base64 and AES-256 encryption.",
    creator: "@drbaph",
    images: ["/hash-og.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/android-chrome-192x192.png",
      },
    ],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="theme-color" content="#121212" />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-background text-foreground`}>
        <div className="noise"></div>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  )
}



import './globals.css'