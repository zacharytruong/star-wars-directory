import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { ReactNode } from 'react';
import QueryQueryProvider from '@/components/QueryProvider';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Star Wars Character Directory',
  description:
    'Directory of characters in the Star Wars universe using the Star Wars API',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={`{$montserrat.className} bg-gradient-to-r from-indigo-900 via-purple-700 to-red-600 min-h-screen`}
      >
        <QueryQueryProvider>{children}</QueryQueryProvider>
      </body>
    </html>
  );
}
