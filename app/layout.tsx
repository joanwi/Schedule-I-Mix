import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Best Schedule 1 Mix Recipes: Boost Profits with the Best Combinations',
  description: 'Explore the best Schedule 1 mix recipes to maximize profits and enhance gameplay. Discover top combinations, costs, and effects for ultimate success!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <GoogleAnalytics gaId="G-4EE9C2J7NN" />
    </html>
  );
}
