import "./globals.css";
import { Inter, Open_Sans, Roboto } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import BookCarousel from "@/components/BookCarousel";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});
const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400"],
});

export const metadata = {
  title: "BOOKSTORE – Votre bibliothèque en ligne",
  description:
    "Découvrez, commandez et explorez des milliers de livres dans tous les genres.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${openSans.variable} ${roboto.variable}`}
    >
      <body className="font-roboto">
        <NavBar />
        <BookCarousel />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
