import type { Metadata } from "next";
import { Afacad } from "next/font/google";
import "./globals.css";

const afacad = Afacad({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-afacad",
});

export const metadata: Metadata = {
  title: "Virtue Token Leaderboard",
  description:
    "Track the holders, identify the jeets, celebrate the diamond hands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${afacad.variable} font-afacad antialiased`}>
        {children}
      </body>
    </html>
  );
}
