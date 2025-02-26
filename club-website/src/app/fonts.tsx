import { Poppins, Caveat_Brush, Fredoka } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const caveatBrush = Caveat_Brush({
  subsets: ["latin"],
  weight: ["400"],
});

export const fredoka = Fredoka({
  subsets: ["latin"]
});
