import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../../../authContext/authContext";

const AddCoursePage = () => {
  const { signOut } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [categoryID, setCategoryID] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [longDescription, setLongDescription] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [error, setError] = useState("");

  const token = localStorage.getItem("token");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!token) {
      setError("Token not found. Please log in again.");
      return;
    }
    const formData = new FormData();
    formData.append("name", name);
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
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        // Course created successfully
        console.log("Course created:", response.data);
        // Reset form
        setName("");
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
        <label htmlFor="name">Course Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="categoryID">Category ID:</label>
        <input
          type="text"
          id="categoryID"
          value={categoryID}
          onChange={(e) => setCategoryID(e.target.value)}
          required
        />
        <label htmlFor="shortDescription">Short Description:</label>
        <textarea
          id="shortDescription"
          value={shortDescription}
          onChange={(e) => setShortDescription(e.target.value)}
          required
        ></textarea>
        <label htmlFor="longDescription">Long Description:</label>
        <textarea
          id="longDescription"
          value={longDescription}
          onChange={(e) => setLongDescription(e.target.value)}
          required
        ></textarea>
        <label htmlFor="image">Course Image:</label>
        <input
          type="file"
          id="image"
          accept="image/*"
          onChange={handleImageChange}
        />
        {imagePreview && <img src={imagePreview} alt="Course Preview" />}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddCoursePage;
