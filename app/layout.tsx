import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { ReactNode } from 'react';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Star Wars Directory',
  description:
    'Directory of the Star Wars universe using the Star Wars API. Credits to SWAPI for the API: https://swapi.dev/',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="light"
      className="bg-gradient-to-r from-indigo-900 via-purple-700 to-red-600"
    >
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
