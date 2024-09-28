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
    <div className={inter.className}>
      <Fall24ReviewsHeader />

      {children}

      <Fall24ReviewsFooter />
    </div>
  );
}