import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
function BookTable({ books }) {
  return (
    <div>
      <table className="w-full border-separate border-spacing-2">
        <thead>
          <tr>
            <th className="border border-slate-600 rounded-md">No</th>
            <th className="border border-slate-600 rounded-md">Name</th>
            <th className="border border-slate-600 rounded-md max-md:hidden">
              Author
            </th>
            <th className="border border-slate-600 rounded-md max-md:hidden">
              Publish Year
            </th>
            <th className="border border-slate-600 rounded-md ">Operations</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, i) => (
            <tr key={book._id} className="h-8">
              <td className="border border-slate-700 rounded-md text-center">
                {i + 1}
              </td>
              <td className="border border-slate-700 rounded-md text-center">
                {book.title}
              </td>
              <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                {book.author}
              </td>
              <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                {book.publishYear}
              </td>
              <td className="border border-slate-700 rounded-md text-center">
                <div className="flex justify-center gap-x-4">
                  <div class="group">
                    <div class=" text-white px-4 py-2 transition-all duration-300 transform group-hover:scale-105">
                      <Link to={`/books/details/${book._id}`}>
                        <BsInfoCircle className="text-2x1 text-green-800" />
                      </Link>
                    </div>

                    <div class="hidden group-hover:block bg-gray-800 text-white p-2 absolute top-18 left-30 ">
                      Book Details
                    </div>
                  </div>

                  <div class="group">
                    <div class=" text-white px-4 py-2 transition-all duration-300 transform group-hover:scale-105">
                      <Link to={`/books/edit/${book._id}`}>
                        <AiOutlineEdit className="text-2x1 text-yellow-600 hover:" />
                      </Link>
                    </div>

                    <div class="hidden group-hover:block bg-gray-800 text-white p-2 absolute top-18 left-30">
                      Edit Book
                    </div>
                  </div>

                  <div class="group">
                    <div class=" text-white px-4 py-2 transition-all duration-300 transform group-hover:scale-105">
                      <Link to={`/books/delete/${book._id}`}>
                        <MdOutlineDelete className="text-2x1 text-red-600" />
                      </Link>
                    </div>

                    <div class="hidden group-hover:block bg-gray-800 text-white p-2 absolute top-18 left-30">
                      Delete Book
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BookTable;
