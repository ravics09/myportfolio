import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ravi Sharma',
  description: 'Generated by create next app',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" className="bg-[#091930]">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
