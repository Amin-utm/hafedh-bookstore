"use client";
import { useRouter } from "next/navigation";

export default function BoutonNewsletter() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/abonnement")}
      className="bg-secondaire text-white px-4 py-2 rounded hover:bg-primaire transition-colors duration-300"
    >
      S'abonner à la newsletter
    </button>
  );
}
