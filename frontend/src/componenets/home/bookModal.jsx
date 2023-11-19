import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";
function BookModal({ book, onClose }) {
  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center bg-black bg-opacity-60"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[600px] mx-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative"
      >
        <div class="group">
          <div class=" text-white px-4 py-2 transition-all duration-300 transform group-hover:scale-105">
            <AiOutlineClose
              className="absolute right-3 top-3 text-3xl cursor-pointer text-red-600"
              onClick={onClose}
            />
          </div>

          <div class="text-2xl hidden group-hover:block bg-gray-800 text-white p-2 absolute top-0 right-8 ">
            Close
          </div>
        </div>

        <h2 className="w-fit px-4 py-1 bg-red-300 rounded-1g">
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

        <h4>
          <b>Abstract</b>
        </h4>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, saepe
          consectetur nisi perferendis totam, dolorem quo ipsum minus ipsa nemo
          facere nesciunt qui? Nisi sapiente impedit illum aut doloremque
          dolorem!
        </p>
      </div>
    </div>
  );
}

export default BookModal;
