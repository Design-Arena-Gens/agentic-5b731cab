import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "B2B Sales Agent - AI-Powered Lead Generation",
  description: "Replace your lead generation executives with an intelligent AI sales agent",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
