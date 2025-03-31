import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import ClientWrapper from "@/components/clientProvider/wrapper";
import ClientProvider from "@/components/clientProvider";
import MainLayout from "@/components/layouts/main";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "ASA",
  description: "Alireza Structure Architecture",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientWrapper>
          <ClientProvider>
            <MainLayout>{children}</MainLayout>
          </ClientProvider>
        </ClientWrapper>
      </body>
    </html>
  );
}
