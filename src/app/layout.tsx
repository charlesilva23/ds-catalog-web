import Header from "@/components/Header"
import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "DS Catalog",
  description: "DS Catalog",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
