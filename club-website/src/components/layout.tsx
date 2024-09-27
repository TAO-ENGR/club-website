import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Fall24ReviewsHeader from "@/components/fall24ReviewHeader";
import Fall24ReviewsFooter from "@/components/fall24ReviewFooter";

const inter = Inter({ subsets: ["latin"] });

export default function Fall24ReviewsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Fall24ReviewsHeader />

        {children}

        <Fall24ReviewsFooter />
      </body>
    </html>
  );
}