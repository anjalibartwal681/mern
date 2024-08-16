import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../utils";
import Navbar from "../components/Navbar";
// import Navbar from "../components/Navbar";

function Home() {
  const [loggedInUser, setLoggedInUser] = useState("");
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("loggedInuser");
    setLoggedInUser(user);

    // Load cart from localStorage
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInuser");
    handleSuccess("User logged out");
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  const fetchProducts = async () => {
    try {
      const url = "http://localhost:8080/products";
      const options = {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      };
      const response = await fetch(url, options);
      const result = await response.json();
      setProduct(Array.isArray(result) ? result : []);
    } catch (error) {
      handleError(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const addToCart = (item) => {
    const updatedCart = [...cart, item];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    handleSuccess(`${item.name} added to cart`);
  };

  return (
    <div>
      <Navbar />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          padding: "10px",
          gap: "20px",
        }}
      >
        {product?.map((item) => (
          <div
            key={item.name}
            style={{
              display: "flex",
              flexDirection: "row",
              textAlign: "center",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              // padding: "20px",
              borderRadius: "8px",
              backgroundColor: "#f9f9f9",
              width: "320px",
            }}
          >
            <img
              src={item.imgSrc}
              alt="product"
              style={{
                width: "150px",
                height: "150px",
                objectFit: "cover",
                borderRadius: "8px",
                marginBottom: "10px",
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <p style={{ fontWeight: "bold", margin: "0" }}>{item.name}</p>
              <p style={{ color: "#888", margin: "5px 0" }}>{item.price}</p>
              <p style={{ color: "#888", margin: "5px 0" }}>{item.category}</p>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
}

export default Home;
