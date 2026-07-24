import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lalit Portfolio',
  description: 'Portfolio website built with Next.js and TypeScript',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
