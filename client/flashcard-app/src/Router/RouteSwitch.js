import { Routes, Route } from "react-router-dom";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import HomePage from "../components/HomePage";
import Home from "../components/Home";

const RouteSwitch = () => {
  return (
    <Routes>
      <Route path='/' element={<SignUp />} />
      <Route path='/login' element={<Login />} />
      <Route path='/home' element={<HomePage />} />
    </Routes>
  );
};

export default RouteSwitch;
