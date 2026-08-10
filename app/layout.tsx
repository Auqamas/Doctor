import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Aesthetic by Dr. Fareena Asghar | Premium Aesthetic Clinic',
  description:
    'Experience world-class aesthetic and dermatology care with Dr. Fareena Asghar, Aesthetic & Dermatologist Physician. Botox, Dermal Fillers, HydraFacial, PRP, Laser Hair Removal, and 20+ advanced treatments. Book your consultation today.',
  keywords:
    'aesthetic clinic, botox, dermal fillers, hydrafacial, PRP therapy, laser hair removal, Dr Fareena Asghar, skin rejuvenation, anti-aging',
  authors: [{ name: 'Dr. Fareena Asghar' }],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  openGraph: {
    title: 'Aesthetic by Dr. Fareena Asghar | Where Science Meets Timeless Beauty',
    description:
      'Personalized aesthetic treatments designed to enhance your natural beauty with precision, safety, and confidence.',
    url: 'https://www.drfareenaasghar.com',
    siteName: 'Aesthetic by Dr. Fareena Asghar',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aesthetic by Dr. Fareena Asghar',
    description: 'Premium aesthetic clinic - Where Science Meets Timeless Beauty',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.drfareenaasghar.com',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#C9A35A',
  width: 'device-width',
  initialScale: 1,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable} bg-background`}>
      <head>
        <script
          async
          src="https://www.instagram.com/embed.js"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased font-sans">{children}</body>
    </html>
  )
}
