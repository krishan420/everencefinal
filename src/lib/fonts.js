import localFont from "next/font/local";
import { Inter } from "next/font/google";

export const campton = localFont({
  src: [
    { path: "../assets/fonts/CamptonThin.otf", weight: "100", style: "normal" },
    { path: "../assets/fonts/CamptonLight.otf", weight: "300", style: "normal" },
    { path: "../assets/fonts/CamptonBook.otf", weight: "400", style: "normal" },
    { path: "../assets/fonts/CamptonMedium.otf", weight: "500", style: "normal" },
    { path: "../assets/fonts/CamptonSemiBold.otf", weight: "600", style: "normal" },
    { path: "../assets/fonts/CamptonBold.otf", weight: "700", style: "normal" },
    { path: "../assets/fonts/CamptonExtraBold.otf", weight: "800", style: "normal" },
    { path: "../assets/fonts/CamptonBlack.otf", weight: "900", style: "normal" },
  ],
  variable: "--font-campton",
  display: "swap",
});

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
