import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Footer from "../components/footer.tsx"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TAO Website",
  description: "Website for Texas A&M's ENGR TA Organization",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
