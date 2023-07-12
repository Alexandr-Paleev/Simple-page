import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import { PATH } from "./constants/appRouter";
import Posts from "./pages/Posts";
import User from "./pages/User";
import Users from "./pages/Users";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(PATH.USERS);
  }, []);

  return (
    <div>
      <Routes>
        <Route path={PATH.USERS} element={<Users />} />
        <Route path={PATH.POSTS} element={<Users />} />
        <Route path={PATH.POSTS_ID} element={<User />} />
        <Route path={PATH.POSTS_ALL} element={<Posts />} />
      </Routes>
    </div>
  );
}

export default App;
