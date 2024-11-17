import { Inter } from "next/font/google";
import Winter24ReviewsHeader from "./winter24ReviewHeader";
import Winter24ReviewsFooter from "./winter24ReviewFooter";

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

      <Winter24ReviewsFooter />
    </div>
  );
}