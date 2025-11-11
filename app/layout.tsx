import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { ClientLayout } from "./_client-layout"

const geistSans = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Abdulhafiz Zholodoshov - Frontend Developer Portfolio",
  description:
    "Creative Frontend Developer specializing in React, Next.js, and interactive web experiences. Explore my projects and let's build something amazing together.",
  keywords: ["Frontend Developer", "React", "Next.js", "Web Developer", "Kyrgyzstan", "Portfolio"],
  authors: [{ name: "Abdulhafiz Zholodoshov" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio.example.com",
    title: "Abdulhafiz Zholodoshov - Frontend Developer",
    description: "Creative Frontend Developer Portfolio",
    siteName: "Abdulhafiz Portfolio",
  },
    generator: 'v0.app'
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClientLayout geistFont={geistSans} geistMonoFont={geistMono}>
      {children}
    </ClientLayout>
  )
}
