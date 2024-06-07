import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import MainNavbar from '../components/MainNavbar/index'
import Head from 'next/head'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Azuki App',
  description: 'Created by Shoaib Farooq',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {' '}
        <main className=" inset-0 bg-azukigray-900">
          {' '}
          <div className="flex flex-row justify-around z-50 fixed w-full ">
            <MainNavbar />
          </div>
        </main>
        {children}
      </body>
    </html>
  )
}
