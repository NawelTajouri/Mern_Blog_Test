import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { BrowserRouter, Routes, Navigate } from "react-router-dom";
import { Route } from "react-router";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAuthUser } from "./redux/Actions/authActions";
import { useEffect, useState } from "react";


function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const isFetching = useSelector((state) => state.authReducer.isFetching);
  const user = useSelector((state) => state.authReducer.user);
  console.log(token);
  console.log(user);

  useEffect(() => {
    dispatch(getAuthUser());
 }, []);
console.log(user);
  if (isFetching) {
    <h1>Loading...</h1>;
  }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            path="/dashboard"
            element={!token ? <Navigate to="/login" /> : <Dashboard />}
            // element={<Dashboard/>}
          />

          <Route
            path="/login"
            element={token ? <Navigate to="/dashboard" /> : <Login />}
          />
          <Route
            path="/register"
            element={token ? <Navigate to="/dashboard" /> : <Register />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
