import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const neueHaasMono = localFont({
  src: "./fonts/NeueHaasDisplayMediu.woff",
  variable: "--font-neuehaas-mono",
  weight: "100 900",
});
const neueHaasMediumSans = localFont({
  src: "./fonts/NeueHaasDisplayMediu.woff",
  variable: "--font-neuehaas-sans",
  weight: "500",
});

export const metadata: Metadata = {
  title: "Leo Morgan",
  description: "Personal website of Leo Morgan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${neueHaasMono.variable} ${neueHaasMediumSans.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
