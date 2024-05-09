import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
   

  const signUp = async ({ name, email, password, address, contact, image }) => {
    try {
      console.log("Signing up:", { name, email, password, address, contact, image });
      const imageUrl = await uploadImage(image);

      setUser({ name, email, address, contact, imageUrl });
      setError(null);
      navigate("/home");
    } catch (error) {
      setError("Error signing up. Please try again.");
      console.error("Error signing up:", error);
    }
  };

  const uploadImage = async (imageFile) => {

    return "https://example.com/image.jpg";
  };

  const signIn = async (email, password) => {
    console.log("Signing in:", email, password);
    setUser({ email });
    setError(null);
    navigate("/home");
  };

  const signOut = () => {
    setUser(null);
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ user, signUp, signIn, signOut, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
