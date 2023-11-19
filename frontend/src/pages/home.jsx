import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import Spinner from "../componenets/spinner";
import BookCard from "../componenets/home/bookCard";
import BookTable from "../componenets/home/bookTable";
export default function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5000/books")
      .then((res) => {
        setBooks(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  return (
    <div className="p-4">
      <div className="flex justify-center items-center gap-x-4">
        <button
          className="bg-sky-600 hover:bg-sky-800 text-white px-4 py-1 rounded-1g"
          onClick={() => setShowType("table")}
        >
          Table
        </button>
        <button
          className="bg-sky-300 hover:bg-sky-800 text-white px-4 py-1 rounded-1g"
          onClick={() => setShowType("card")}
        >
          Cards
        </button>
      </div>

      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Books List</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
          Add Book
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : showType === "card" ? (
        <BookCard books={books} />
      ) : (
        <BookTable books={books} />
      )}
    </div>
  );
}
