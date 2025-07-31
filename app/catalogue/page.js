"use client";
import { useState } from "react";
import { books, uniqueGenres, uniqueAuteurs } from "@/data/books";
import BookList from "@/components/BookList";

export default function CataloguePage() {
  const [genre, setGenre] = useState("");
  const [auteur, setAuteur] = useState("");
  const [titre, setTitre] = useState("");

  const filteredBooks = books.filter((book) => {
    return (
      (genre === "" || book.genre === genre) &&
      (auteur === "" || book.auteur === auteur) &&
      book.titre.toLowerCase().includes(titre.toLowerCase())
    );
  });

  return (
    <section className="px-6 py-10">
      <h1 className="text-3xl font-inter font-bold mb-6 text-center text-secondaire">
        Catalogue
      </h1>

      {/* Barre de recherche */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <input
          type="text"
          placeholder="Rechercher par titre..."
          value={titre}
          onChange={(e) => setTitre(e.target.value)}
          className="border px-3 py-2 rounded w-full"
        />

        <select
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          className="border px-3 py-2 rounded w-full"
        >
          <option value="">Tous les genres</option>
          {uniqueGenres.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>

        <select
          value={auteur}
          onChange={(e) => setAuteur(e.target.value)}
          className="border px-3 py-2 rounded w-full"
        >
          <option value="">Tous les auteurs</option>
          {uniqueAuteurs.map((a) => (
            <option key={a} value={a}>
              {a}
            </option>
          ))}
        </select>
      </div>

      {/* Liste des livres filtrés */}
      <BookList books={filteredBooks} />
    </section>
  );
}
