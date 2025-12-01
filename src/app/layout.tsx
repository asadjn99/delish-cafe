import './globals.css'; // Uncomment in your real project
import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // Uncomment in your real project
import TopBar from '../components/layout/TopBar';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer'



export const metadata: Metadata = {
  title: 'Delish Restaurant',
  description: 'Luxury Restaurant & Cafe',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Add className={inter.className} to body in real project */}
      <body className="font-sans antialiased bg-white text-black"> 
        <div className="flex flex-col min-h-screen">
          <TopBar />
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}