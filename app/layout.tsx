import type { Metadata } from "next";
import { gugi } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "alpineworks.io",
  description: "alpineworks.io",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${gugi.className}`}>{children}</body>
    </html>
  );
}
