import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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
      <body className={`${inter.className} min-h-screen bg-[#3A3F47] text-[#FFECB3]`}>
        <Header />
        <main>
        {children}
        </main>
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-4EE9C2J7NN" />
    </html>
  );
}
