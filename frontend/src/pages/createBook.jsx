import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../componenets/backButton";
import Spinner from "../componenets/spinner";
import axios from "axios";
import { useSnackbar } from "notistack";
function CreateBook() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const { enqueueSnackbar } = useSnackbar();

  const SaveBookHandler = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .post("http://localhost:5000/books", data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book saved successfully", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        // alert("An error occurred while saving the book");
        enqueueSnackbar("An error occurred while saving the book", {
          variant: "error",
        });
        console.log(error);
      });
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Create Book</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <span className="text-xl mr-4 text-gray-500">Title</span>
          <input
            type="text"
            className="border-2 border-sky-400 rounded-xl w-full p-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="my-4">
          <span className="text-xl mr-4 text-gray-500">Author</span>
          <input
            type="text"
            className="border-2 border-sky-400 rounded-xl w-full p-2"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="my-4">
          <span className="text-xl mr-4 text-gray-500">Publish Year</span>
          <input
            type="number"
            className="border-2 border-sky-400 rounded-xl w-full p-2"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
          />
        </div>
        <button
          className="p-4 bg-sky-300 m-8 rounded-xl hover:bg-green-700 text-white text-2xl"
          onClick={SaveBookHandler}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default CreateBook;
