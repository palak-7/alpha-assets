import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "@/components/common/header/Header";
import Footer from "@/components/common/footer/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Alfa Assets",
  description: "Asset Portfolio management company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
