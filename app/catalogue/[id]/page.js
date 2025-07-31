import { books } from "@/data/books";
import BookDetailsCard from "@/components/BookDetailsCard";
import { notFound } from "next/navigation";

export default function BookDetailsPage({ params }) {
  const bookId = parseInt(params.id);
  const book = books.find((b) => b.id === bookId);

  if (!book) return notFound();

  return (
    <section className="px-4 py-10">
      <BookDetailsCard book={book} />
    </section>
  );
}
