import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Plausible Integrations",
  description: "Intergrating plausible with next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={
          inter.className +
          " w-full h-full min-h-screen flex flex-col padding-x py-6"
        }
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
