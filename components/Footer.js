import Link from "next/link";
import BoutonNewsletter from "./BoutonNewsLetter";

export default function Footer() {
  return (
    <footer className="bg-gray-100 p-6 mt-10 text-center text-sm text-gray-700">
      <div className="font-bold mb-2">Hafedh_Amine_Nefzi BOOKSTORE © 2025</div>
      <div className="flex justify-center gap-4 mb-4">
        <Link href="/" className="hover:text-primaire transition">
          Accueil
        </Link>
        <Link href="/catalogue" className="hover:text-primaire transition">
          Catalogue
        </Link>
        <Link href="/ajouter" className="hover:text-primaire transition">
          Ajouter
        </Link>
        <Link href="/abonnement" className="hover:text-primaire transition">
          Abonnement
        </Link>
      </div>
      <BoutonNewsletter />
    </footer>
  );
}
