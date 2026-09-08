import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Asri Mela | Developer Portfolio",
  description: "Asri Mela Aldian Syah - RPL Student & Aspiring Web Developer",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
