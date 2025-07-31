import Link from "next/link";

export default function BookCard({ book }) {
  return (
    <div className="border rounded-lg shadow hover:shadow-lg transition p-4 bg-white">
      <img
        src={book.image}
        alt={book.titre}
        className="w-full h-60 object-cover rounded mb-4"
      />
      <Link href={`/catalogue/${book.id}`}>
        <h2 className="text-lg font-semibold font-inter mb-1 text-primaire hover:underline">
          {book.titre}
        </h2>
      </Link>
      <p className="text-sm text-gray-600 mb-1">Auteur : {book.auteur}</p>
      <p className="text-sm text-gray-600 mb-1">Genre : {book.genre}</p>
      <p className="text-md font-bold text-primaire">{book.prix} €</p>
    </div>
  );
}
