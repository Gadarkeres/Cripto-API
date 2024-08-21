import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/components-person/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Crypto API",
  description: "Consumo de API com Next.js e Typescript by Matheus Rafael",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
