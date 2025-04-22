import React from 'react';
import Providers from './components/providers';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const font = Plus_Jakarta_Sans({ subsets: ['latin'] });

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={font.className}>
        {' '}
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};
export default RootLayout;
