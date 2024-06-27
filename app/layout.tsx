import type { Metadata } from "next";
import { IBM_Plex_Serif } from "next/font/google";
import "./globals.css";
import { BRAND } from "@/contants";
import { lufga } from "@/styles/fonts";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ibm-plex-serif",
});

export const metadata: Metadata = {
  title: BRAND.TITLE,
  description: BRAND.DESCIPTION,
  icons: BRAND.ICONS,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lufga.variable}  ${ibmPlexSerif.variable}`}>
        <NextUIProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
