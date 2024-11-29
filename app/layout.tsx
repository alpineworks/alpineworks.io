import type { Metadata } from "next";
import { majormonodisplay } from "@/lib/fonts";
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
      <body className={`${majormonodisplay.className}`}>{children}</body>
    </html>
  );
}
