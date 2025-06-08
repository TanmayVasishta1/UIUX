"use client";

import { Inter } from 'next/font/google';
import './globals.css'
import { ComparisonProvider } from './context/ComparisonContext';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { usePathname } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  const hideNavbar =
    pathname === '/auth/signin' ||
    pathname === '/auth/register' ||
    pathname === '/login' ||
    pathname === '/register';

  return (
    <html lang="en">
      <head>
        <meta name="application-name" content="CarKraze" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="CarKraze" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#F97316" />
        
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/images/logo.jpg" />
      </head>
      <body className={inter.className}>
        <AuthProvider>
          <ComparisonProvider>
            {!hideNavbar && <Navbar />}
            <main className="min-h-screen bg-neutral-900">
              {children}
            </main>
            <Footer />
          </ComparisonProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
