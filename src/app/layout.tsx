import type { Metadata } from "next";
import "./globals.css";
import ClientProvider from "./ClientProvider";
import localFont from "next/font/local";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "@/store/currentUser";

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
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data, status } = useSession();
  const dispatch = useDispatch();
  useEffect(() => {
    const getCurrentUser = () => {
      if (status === "authenticated") {
        dispatch(setCurrentUser(data.user));
      }
    };
    getCurrentUser();
  }, [status, data, dispatch]);
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}
