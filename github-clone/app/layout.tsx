import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { MainNav } from "@/components/main-nav"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "GitHub - Build software better, together",
  description:
    "GitHub is where people build software. More than 100 million people use GitHub to discover, fork, and contribute to over 330 million projects.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0d1117] text-white`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <MainNav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
