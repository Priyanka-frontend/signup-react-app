import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Signup from "./components/Signup";
import Profile from "./components/Profile";

function App() {
  const navigate = useNavigate();

  const accessToken = useSelector(
    (state) => state.auth.accessToken
  );

  useEffect(() => {
    const currentPath = window.location.pathname;

    if (accessToken && currentPath === "/") {
      navigate("/profile");
    }

    if (!accessToken && currentPath === "/profile") {
      navigate("/");
    }
  }, [accessToken, navigate]);

  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;