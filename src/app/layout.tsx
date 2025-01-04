import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"], // Choose the subsets you need
  weight: ["400", "500", "600", "700"], // Select the font weights
  variable: "--font-poppins", // Define a CSS variable for the font
});

export const metadata: Metadata = {
  title: "  HosterGame",
  description:
    "No 1 online gaming platform for gamers streamers and content contributors",
  icons: {
    icon: "/favicon.ico", // Path to your favicon
    // Optionally, specify other sizes or types:
    // apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${poppins.variable}  bg-bg_base`}>{children}</body>
    </html>
  );
}
