import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoadingProvider from "./components/LoadingProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Leo Morgan",
  description: "Train. Learn. Create.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LoadingProvider className="z-10">
          <Navbar />
          {children}
          <Footer />
        </LoadingProvider>
      </body>
    </html>
  );
} 