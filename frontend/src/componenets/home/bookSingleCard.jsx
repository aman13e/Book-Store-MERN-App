import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle, BiShow } from "react-icons/bi";
import { BsInfoCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";
import { useState } from "react";
import BookModal from "./bookModal";
function BookSingleCard({ book }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <div
      key={book.id}
      className="bg-sky-50 border border-gray-800 rounded-lg px-4 py-2 m-4 relative
  hover:shadow-xl "
    >
      <h2 className="absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-1g">
        {book.publishYear}
      </h2>
      <h4 className=" my-2 text-gray-400">{book._id}</h4>
      <div className="flex justify-start items-center gap-x-2">
        <PiBookOpenTextLight />
        <h2 className="my-1">{book.title}</h2>
      </div>
      <div className="flex justify-start items-center gap-x-2">
        <BiUserCircle className="text-red-300 text-2xl" />
        <h2 className="my-1">{book.author}</h2>
      </div>
      <div className="flex justify-between items-center gap-x-2 mt-4 p-4">
        <div class="group">
          <div class=" text-white px-4 py-2 transition-all duration-300 transform group-hover:scale-105">
            <BiShow
              className="text-blue-600 text-2xl hover:text-black cursor-pointer"
              onClick={() => setShowModal(true)}
            />
          </div>

          <div class="hidden group-hover:block bg-gray-800 text-white p-2 absolute top-18 left-30 ">
            Show Abstract
          </div>
        </div>

        <div class="group">
          <div class=" text-white px-4 py-2 transition-all duration-300 transform group-hover:scale-105">
            <Link to={`/books/details/${book._id}`}>
              <BsInfoCircle className="text-green-600 text-2xl hover:text-black" />
            </Link>
          </div>

          <div class="hidden group-hover:block bg-gray-800 text-white p-2 absolute top-18 left-30 ">
            Book Details
          </div>
        </div>

        <div class="group">
          <div class=" text-white px-4 py-2 transition-all duration-300 transform group-hover:scale-105">
            <Link to={`/books/edit/${book._id}`}>
              <AiOutlineEdit className="text-yellow-600 text-2xl hover:text-black" />
            </Link>
          </div>

          <div class="hidden group-hover:block bg-gray-800 text-white p-2 absolute top-18 left-30">
            Edit Book
          </div>
        </div>

        <div class="group">
          <div class=" text-white px-4 py-2 transition-all duration-300 transform group-hover:scale-105">
            <Link to={`/books/delete${book._id}`}>
              <MdOutlineDelete className="text-red-600 text-2xl hover:text-black" />
            </Link>
          </div>

          <div class="hidden group-hover:block bg-gray-800 text-white p-2 absolute top-18 left-30">
            Delete
          </div>
        </div>
      </div>
      {showModal && (
        <BookModal book={book} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
}

export default BookSingleCard;
