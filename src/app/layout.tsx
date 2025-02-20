import type { Metadata } from "next";
import { Playfair_Display, Poppins, Open_Sans } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import ClientProviders from "@/components/providers/ClientProviders";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "700"], // Regular i Bold
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Regular, Medium, Bold
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Regular, Semi-Bold, Bold
});

export const metadata: Metadata = {
  title: "Blog",
  description: "An educational blog for studying art history",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${playfairDisplay.variable} ${poppins.variable} ${openSans.variable}`}
      >
        <header>
          <Image
            src="/logo.svg"
            alt="Logo"
            width={185}
            height={58}
            className="w-auto"
          />
        </header>
        <main>
          <ClientProviders>{children}</ClientProviders>
        </main>
      </body>
    </html>
  );
}
