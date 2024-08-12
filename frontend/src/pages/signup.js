import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { handleError, handleSuccess } from "../utils";
import { Link, useNavigate } from "react-router-dom";
function Signup() {
  const navigate = useNavigate();
  const [signupInfo, setSignupInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const { name, email, password } = signupInfo;
    if (!name || !email || !password) {
      return handleError("All fields are required");
    }
    try {
      const url = "http://localhost:8080/auth/signup";
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(signupInfo),
      });

      const result = await response.json();
      const { success, message, error } = result;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else if (error) {
        const details = error?.details[0].message;

        handleError(details);
      } else if (!success) {
        handleError(message);
      }
      console.log(result);
    } catch (err) {
      handleError(err);
    }
  };
  //     if (!response.ok) {
  //       throw new Error("Network response waZs not ok");
  //     }

  //     // Handle successful signup here, e.g., show a success message or redirect
  //     toast.success("Signup successful!");
  //   } catch (err) {
  //     handleError(err);
  //   }
  // };

  return (
    <div className="container">
      <h1>Signup</h1>
      <form onSubmit={handleSignup}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            autoFocus
            placeholder="Enter your name..."
            value={signupInfo.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email..."
            value={signupInfo.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password..."
            value={signupInfo.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Signup</button>
        <span>
          Doesn't have an account?
          <Link to="/login">Login</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Signup;
