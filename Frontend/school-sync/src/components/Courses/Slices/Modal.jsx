import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../../../authContext/authContext";

const AddCoursePage = () => {
  const { signOut } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [categoryID, setCategoryID] = useState("");
  const [error, setError] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [longDescription, setLongDescription] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");

  const token = localStorage.getItem("token");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData();
    data.append("name", courseName);
    data.append("category_id", categoryID);
    data.append("instructor_id", 1233);
    data.append("short_description", shortDescription);
    data.append("long_description", longDescription);
    if (image) {
      data.append("image", image);
    }

    // const headers = {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //     "Content-type": "multipart/form-data",
    //   },
    //   withCredentials: true,
    // };
    // try {
    //   const result = await axios.post(
    //     "http://127.0.0.1:8000/api/create/course",
    //     data,

    //     headers
    //   );
    //   console.log(result);
    //   console.log("Headers:", {
    //     "Content-Type": "multipart/form-data",
    //     Authorization: `Bearer ${token}`,
    //   });

    try {
      const respose = await axios.post(
        "http://127.0.0.1:8000/api/create/course",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (respose.status === 200) {
        console.log("Course created:", respose.data);
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
      }
    } catch (error) {
      console.error("Error creating course:", error);
      console.error("Error creating course:", error);
      if (error.response && error.response.status === 401) {
        setError("Unauthorized. Please log in again.");
        signOut();
        signOut();
      } else {
        setError("An error occurred. Please try again.");
      }
    }

    closeModal();
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
