import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Virtue Token Leaderboard",
  description: "Track the holders, identify the jeets, celebrate the diamond hands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
