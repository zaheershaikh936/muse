import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavbarComponent } from "@/components/common/navbar";
import Footer from "@/components/common/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muse",
  description: "Find a mentor for you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavbarComponent />
        <main className="container pt-28">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
