import { Poppins } from 'next/font/google';
import './globals.css';
import Navbar from './(components)/Navbar';

const poppins = Poppins({ weight: ['400', '500'], subsets: ['latin'] });

export const metadata = {
  title: 'Ticketing app',
  description: 'Ticketing app for tracking and managing projects.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <Navbar />
        <main className='m-5'>{children}</main>
      </body>
    </html>
  );
}
