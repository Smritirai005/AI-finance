import {Inter} from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/header";
import { ClerkProvider } from "@clerk/nextjs";

const inter=Inter({subsets: ["latin"]});

export const metadata = {
  title: "fealth",
  description: "One stop finance app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${inter.className}`}
      >
        {/*header*/}
        <Header>Header</Header>
        <main className="min-h-screen">{children}</main>
        {/*footer*/}
        <footer className="bg-blue-50 py-12">
          <div className="container mx-auto px-4 text-center text-gray-600"><p>made by smriti</p></div>
        </footer>
      </body>
    </html>
    </ClerkProvider>
  );
}
