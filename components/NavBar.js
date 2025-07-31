"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Book } from "lucide-react"; // logo icône simple

const menu = [
  { name: "Accueil", href: "/" },
  { name: "Catalogue", href: "/catalogue" },
  { name: "Abonnement", href: "/abonnement" },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-between p-4 shadow bg-white">
      <div className="text-2xl font-inter font-bold text-primaire flex items-center gap-2">
        <Book className="text-secondaire" />
        Hafedh_Amine_Nefzi
      </div>
      <ul className="flex gap-6 font-opensans text-base">
        {menu.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`transition-colors duration-300 ${
                pathname === item.href
                  ? "text-primaire"
                  : "text-gray-600 hover:text-secondaire"
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
