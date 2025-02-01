import {Inter} from "next/font/google";
import "./globals.css";

const inter=Inter({subsets: ["latin"]});

export const metadata = {
  title: "fealth",
  description: "One stop finance app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}`}
      >
        {children}
        {/*footer*/}
        <footer className="bg-blue-50 py-12">
          <div className="container mx-auto px-4 text-center text-gray-600"></div>
          <p>made by smriti</p>
        </footer>
      </body>
    </html>
  );
}
