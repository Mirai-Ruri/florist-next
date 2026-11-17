import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fleur — Flowers for the feeling",
  description: "Thoughtfully gathered flowers, made by hand in Brooklyn.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
