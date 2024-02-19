import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { DESC } from "@/utils";
import arist from "@/assets/images/artist2.jpeg";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anindya Mukherjee",
  description: DESC,
  openGraph: {
    images: [arist.src],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-app-bg site-font">
        <div className="bg-app-bg site-font">
          <div className="fixed top-0 left-0 right-0 z-50 bg-app-bg shadow">
            <NavBar />
          </div>
          <div>{children}</div>
          <footer className="bg-[#E6E6E6]">
            <div className="container px-4 mx-auto py-16">
              <p>© Anindya Mukherjee</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
