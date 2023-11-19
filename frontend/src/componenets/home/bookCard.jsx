import React from "react";
import BookSingleCard from "./bookSingleCard";
function BookCard({ books }) {
  return (
    <div className="grid sm:grid-cols-2 xl:grid-cols-3 lg:grid-cols-4">
      {books.map((item) => (
        <BookSingleCard key={item._id} book={item} />
      ))}
    </div>
  );
}

export default BookCard;
