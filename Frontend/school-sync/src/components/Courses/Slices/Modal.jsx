import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../../authContext/authContext";

const Modal = ({ closeModal, addCourse }) => {
  const modalRef = useRef();
  const [courseName, setCourseName] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [longDescription, setLongDescription] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [error, setError] = useState(null);

  const { signOut } = useContext(AuthContext);
  const token = localStorage.getItem("token");
  console.log(token);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeModal]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(localStorage.getItem("token"));

    const data = new FormData();
    data.append("name", courseName);
    data.append("short_description", shortDescription);
    data.append("long_description", longDescription);
    data.append("image", image);

    try {
      const result = await axios.post(
        "http://127.0.0.1:8000/api/create/course",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(result);
      console.log("Headers:", {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      });

      addCourse({
        name: courseName,
        short_description: shortDescription,
        long_description: longDescription,
        image: URL.createObjectURL(image),
      });

      // Reset form after successful submission
      setCourseName("");
      setShortDescription("");
      setLongDescription("");
      setImage(null);
      setImagePreview("");

      closeModal();
    } catch (error) {
      console.error(error);

      if (error.response && error.response.status === 401) {
        // Handle unauthorized error
        setError("Unauthorized. Please log in again.");
        signOut(); // Sign out the user
      } else {
        setError("An error occurred. Please try again.");
      }
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div ref={modalRef} className="bg-white p-10 rounded w-[800px]">
        <h2 className="text-xl mb-4">Add New Course</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold m-1"
              htmlFor="courseName"
            >
              Course Name
            </label>
            <input
              type="text"
              id="courseName"
              className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="shortDescription"
            >
              Short Description
            </label>
            <textarea
              id="shortDescription"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={shortDescription}
              onChange={(e) => setShortDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="longDescription"
            >
              Long Description
            </label>
            <textarea
              id="longDescription"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={longDescription}
              onChange={(e) => setLongDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="courseImage"
            >
              Course Image
            </label>
            <input
              type="file"
              id="courseImage"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              accept="image/*"
              onChange={handleImageChange}
            />
            {imagePreview && (
              <div className="mt-4 w-full">
                <img
                  src={imagePreview}
                  alt="Course"
                  className="max-w-full h-auto rounded"
                />
              </div>
            )}
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
            <button
              type="button"
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={closeModal}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;