import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: 'Sheryar - Frontend Developer Portfolio',
  description:
    'Frontend developer with 4 years of experience in React, Next.js, and modern web technologies. Specializing in building beautiful, responsive, and user-friendly web applications.',
  keywords: [
    'Frontend Developer',
    'React',
    'Next.js',
    'TypeScript',
    'Web Development',
    'Portfolio',
    'UI/UX',
    'JavaScript',
    'Tailwind CSS',
  ],
  authors: [{ name: 'Sheryar' }],
  creator: 'Sheryar',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-portfolio-url.com',
    title: 'Sheryar - Frontend Developer Portfolio',
    description: 'Frontend developer specializing in React, Next.js, and modern web technologies',
    siteName: 'Sheryar Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sheryar - Frontend Developer Portfolio',
    description: 'Frontend developer specializing in React, Next.js, and modern web technologies',
    creator: '@yourtwitterhandle',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} font-sans antialiased`}>{children}</body>
    </html>
  );
}
