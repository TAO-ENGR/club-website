import { Inter } from "next/font/google";
import Fall24ReviewsFooter from "@/components/fall24ReviewFooter";
import Winter24ReviewsHeader from "./winter24ReviewHeader";

const inter = Inter({ subsets: ["latin"] });

// Temporary solution don't come at me please :(

export default function Winter24ReviewsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={inter.className}>
      <Winter24ReviewsHeader />

      {children}

      <Fall24ReviewsFooter />
    </div>
  );
}