import { Inter, Poppins, Roboto_Serif } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });

export const roboto_serif = Roboto_Serif({
  subsets: ["latin"],
});

export const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
