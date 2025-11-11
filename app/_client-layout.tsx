"use client"

import type React from "react"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

interface ClientLayoutProps {
  children: React.ReactNode
  geistFont: any
  geistMonoFont: any
}

export const ClientLayout = ({ children, geistFont, geistMonoFont }: ClientLayoutProps) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navbar />
          <main>{children}</main>
          <ScrollToTop />
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}

export default ClientLayout
