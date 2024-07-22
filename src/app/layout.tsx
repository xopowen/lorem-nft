import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'
import Header from "@/app/ui/Header";
import Footer from "@/app/ui/Footer";



export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body  >
      <Header/>
      {children}
      <Footer/>
      </body>

    </html>
  )
}
