import "../styles/main.scss";
import "aos/dist/aos.css";
import "react-toastify/dist/ReactToastify.css";

import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";

export const metadata: Metadata = {
  title: "Techbolted",
  description: "Techbolted",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
