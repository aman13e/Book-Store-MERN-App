import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSnackbar } from "notistack";
import BackButton from "../componenets/backButton";
import Spinner from "../componenets/spinner";
import axios from "axios";

function EditBook() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5000/books/${id}`)
      .then((res) => {
        setTitle(res.data.title);
        setAuthor(res.data.author);
        setPublishYear(res.data.publishYear);
        setLoading(false);
      })
      .catch((error) => {
        // alert("An Error Occured!");
        enqueueSnackbar("An Error Occured!", { variant: "error" });
        console.log(error);
        setLoading(false);
      });
  }, [id]);
  const EditBookHandler = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .put(`http://localhost:5000/books/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Edited successfully", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("An error occurred", {
          variant: "error",
        });
        // alert("An error occurred while saving the book");
        console.log(error);
      });
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Edit Book</h1>
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
          onClick={EditBookHandler}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default EditBook;
