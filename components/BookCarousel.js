"use client";
import Slider from "react-slick";
import { books } from "../data/books";

export default function BookCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  return (
    <div className="my-8 px-6">
      <Slider {...settings}>
        {books.slice(0, 8).map((book) => (
          <div key={book.id} className="px-2">
            <img
              src={book.image}
              alt={book.titre}
              className="h-60 w-full object-cover rounded-lg shadow"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
