import { Inter } from 'next/font/google';
import './globals.css';

import Header from '@/components/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Bakcell - İlk və Ən Sürətli Mobil İnternet',
  description: 'Bakcell - Azərbaycanın ilk və ən sürətli mobil internet operatoru',
};

export default function RootLayout({ children }) {
  return (
    <html lang="az">
      <body className={inter.className}>
        <Header />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}