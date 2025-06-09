import { Poppins } from "next/font/google";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { Metadata } from "next";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title:
    "Inframe School: Best Art, Design & Business School in Jodhpur | Top College for Creative Education",
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className={`${poppins.className}`}>{children}</main>
      <Footer />
    </>
  );
}
