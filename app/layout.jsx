import {JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"


const jetBrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  weight: ["100","200","300","500","600","800"],
  variable: "--font--jetbrainsMono"
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt_br">
      <body className={jetBrainsMono.variable}>
        <Header />
        {children}</body>
    </html>
  );
}
