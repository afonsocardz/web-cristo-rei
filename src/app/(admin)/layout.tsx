"use client";
import { Inter } from "next/font/google";
import "../globals.css";
import { firebase } from "@/config/firebase.config";
import { useRouter } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  firebase.auth.onAuthStateChanged((user) => {
    if (!user) {
      router.push("/admin");
    }
  });
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
