import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";

// const inter = Inter({ subsets: ["latin"] });
const nunito = Nunito({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Airbnb Clone",
  description: "We develop a clone of Airbnb",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
