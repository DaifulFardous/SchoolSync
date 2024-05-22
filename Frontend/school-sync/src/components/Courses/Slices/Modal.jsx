import React, { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../../authContext/authContext";

const AddCoursePage = () => {
  const { signOut } = useContext(AuthContext);
  const [courseName, setCourseName] = useState("");
  const [categoryID, setCategoryID] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [longDescription, setLongDescription] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [error, setError] = useState("");

  const token = localStorage.getItem("token");
  console.log(token)

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!token) {
      setError("Token not found. Please log in again.");
      return;
    }
    const formData = new FormData();
    formData.append("name", courseName);
    formData.append("category_id", categoryID);
    formData.append("short_description", shortDescription);
    formData.append("long_description", longDescription);
    if (image) {
      formData.append("image", image);
    }

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/create/course",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer 8|F2Et67cgxU8uom4K71n1OwpK41lEuGYK0OMMmvOKe01be5b4`,
          },
        }
      );

      if (response.status === 200) {
        // Course created successfully
        console.log("Course created:", response.data);
        // Reset form
        setCourseName("");
        setCategoryID("");
        setShortDescription("");
        setLongDescription("");
        setImage(null);
        setImagePreview("");
        setError("");
      } else {
        setError("Failed to create course.");
      }
    } catch (error) {
      console.error("Error creating course:", error);
      if (error.response && error.response.status === 401) {
        setError("Unauthorized. Please log in again.");
        signOut();
      } else {
        setError("An error occurred. Please try again.");
      }
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(file ? URL.createObjectURL(file) : "");
  };

  return (
    <div>
      <h1>Add New Course</h1>
      {error && <div className="text-red-500">{error}</div>}
      <form onSubmit={handleSubmit}>
        <label>Course Name:</label>
        <input
          type="text"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
          required
        />
        <label>Category ID:</label>
        <input
          type="text"
          value={categoryID}
          onChange={(e) => setCategoryID(e.target.value)}
          required
        />
        <label>Short Description:</label>
        <textarea
          value={shortDescription}
          onChange={(e) => setShortDescription(e.target.value)}
          required
        ></textarea>
        <label>Long Description:</label>
        <textarea
          value={longDescription}
          onChange={(e) => setLongDescription(e.target.value)}
          required
        ></textarea>
        <label>Course Image:</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          required
        />
        {imagePreview && <img src={imagePreview} alt="Course Preview" />}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddCoursePage;
