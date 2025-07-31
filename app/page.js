"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <section className="text-center mt-8 px-4">
      <h1 className="text-4xl font-inter font-bold mb-4">
        Bienvenue sur BOOKSTORE
      </h1>
      <p className="text-gray-600 mb-6">
        Explorez notre sélection de livres dans tous les genres.
      </p>
      <div className="flex justify-center gap-4">
        <button
          onClick={() => router.push("/catalogue")}
          className="bg-primaire text-white px-4 py-2 rounded hover:bg-secondaire transition"
        >
          Voir le catalogue
        </button>
        <button
          onClick={() => router.push("/abonnement")}
          className="bg-secondaire text-white px-4 py-2 rounded hover:bg-primaire transition"
        >
          S’abonner
        </button>
      </div>
    </section>
  );
}
