import type { Metadata } from "next";
import { Bad_Script, Instrument_Sans } from "next/font/google";
import "./globals.css";

const instrument = Instrument_Sans({ subsets: ["latin"], variable: "--font-instrument" });
const badScript = Bad_Script({ subsets: ["latin"], weight: "400", variable: "--font-bad-script" });

export const metadata: Metadata = {
  title: "Azka Faisal | UI/UX & Product Design",
  description: "Portfolio of Azka Faisal, a UI/UX and product design student at NJIT.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${instrument.variable} ${badScript.variable} bg-blush font-sans text-body text-ink antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
