import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/signup";
import { useState } from "react";
import RefrshHandler from "./RefrshHandler";
import Navbar from "./components/Navbar";
// import Cart from "./components/cart";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />;
  };
  return (
    <>
      <div>
        <RefrshHandler setIsAuthenticated={setIsAuthenticated} />
        <Routes>
          {" "}
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<PrivateRoute element={<Home />} />} />
          {/* <Route path="/navbar" element={<Navbar />} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
