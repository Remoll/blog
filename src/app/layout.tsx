import type { Metadata } from "next";
import { Playfair_Display, Poppins, Open_Sans } from "next/font/google";
import "./globals.css";
import ClientProviders from "@/components/providers/ClientProviders";
import GlobalHeader from "@/components/ui/GlobalHeader";
import DeviceUpdater from "@/components/ui/DeviceUpdater";
import { ToastContainer } from "react-toastify";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
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
        <ClientProviders>
          <DeviceUpdater />
          <ToastContainer position="top-right" autoClose={5000} />
          <GlobalHeader />
          <main>{children}</main>
        </ClientProviders>
      </body>
    </html>
  );
}
