import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Blog | Rahul',
  description:
    'Personalised Blog Website, where you can find personalised programming related blogs and tips to enchance your development skills',
  icons: '/logo/white.png',
  openGraph: {
    type: 'website',
    siteName: 'Blog',
    title: 'Blog',
    url: 'https://blogs.snapbit.in',
    description:
      'Personalised Blog Website created by Developer Rahul Arora',
    images: [
      {
        url: 'https://res.cloudinary.com/doql129vl/image/upload/v1695316482/group_hi47ny.png',
      },
    ],
  },
  alternates: {
    canonical: 'https://blogs.snapbit.in',
  },
  twitter: {
    creator: '@RahulP06',
    images:
      'https://res.cloudinary.com/doql129vl/image/upload/v1695316482/group_hi47ny.png',
    site: '@site',
    title: 'Rahul | Portfolio',
    description:
      'Personalised Blog Website created by Developer Rahul Arora',
    card: 'summary_large_image',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className}`}>
        <>{children}</>
      </body>
    </html>
  )
}
