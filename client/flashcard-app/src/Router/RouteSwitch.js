import { Routes, Route } from "react-router-dom";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import HomePage from "../components/HomePage";
import Home from "../components/Home";
import SetsPage from "../components/SetsPage";
import PlayGame from "../components/PlayGame";

const RouteSwitch = () => {
  return (
    <Routes>
      <Route path='/' element={<SignUp />} />
      <Route path='/login' element={<Login />} />
      <Route path='/home' element={<HomePage />} />
      <Route path='/sets' element={<SetsPage />} />
      <Route path='/play' element={<PlayGame />} />
    </Routes>
  );
};

export default RouteSwitch;
