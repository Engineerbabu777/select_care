


import HeaderMain from '@/components/Header/HeaderMain';
import './globals.css'
import { Metadata } from 'next';
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast';
const inter = Inter({ subsets: ['latin'] });


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
      <body className={`inter.className bg-gray-100`}>
        <Toaster />
        <HeaderMain />
        {children}
      </body>
    </html>
  )
}
