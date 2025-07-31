export default function BookDetailsCard({ book }) {
  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow">
      <img
        src={book.image}
        alt={book.titre}
        className="w-full h-80 object-cover rounded mb-6"
      />
      <h1 className="text-3xl font-inter font-bold text-primaire mb-2">
        {book.titre}
      </h1>
      <p className="text-gray-700 mb-1">
        Auteur : <span className="font-semibold">{book.auteur}</span>
      </p>
      <p className="text-gray-700 mb-1">
        Genre : <span className="italic">{book.genre}</span>
      </p>
      <p className="text-gray-700 mb-4">{book.résumé}</p>
      <p className="text-lg font-bold text-secondaire">Prix : {book.prix} €</p>
    </div>
  );
}
