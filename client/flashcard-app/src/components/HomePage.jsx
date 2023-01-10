import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

const HomePage = () => {
  // eslint-disable-next-line no-unused-vars
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");

  // the black full screen overlay after clicking on create set
  const [newcardGroupOverlay, setNewcardGroupOverlay] = useState(false);

  // the input that shows in the overlay
  const [newCardGroupInput, setNewCardGroupInput] = useState("");

  // eslint-disable-next-line no-unused-vars
  const [msg, setMsg] = useState("");
  const [userId, setUserId] = useState("");
  const [getCardGroups, setGetCardGroups] = useState([]);
  const navigate = useNavigate();

  const refreshToken = async () => {
    try {
      const response = await axios.get("http://localhost:5000/token");
      setToken(response.data.accessToken);
      const decoded = jwt_decode(response.data.accessToken);
      setExpire(decoded.exp);
      setUserId(decoded.userId);
    } catch (error) {
      if (error.response) {
        navigate("/");
      }
    }
  };

  useEffect(() => {
    refreshToken();
    if (userId !== "") {
      getSets();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  // if you click on the overlay it minimizes it, but still allows you to click on the input and the btn
  const handleNewcardGroupOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setNewcardGroupOverlay(false);
    }
  };

  // on click get rid of the overlay and add the title to the sidebar
  const handleNewGroupClick = async () => {
    setNewcardGroupOverlay(false);
    try {
      await axios.post("http://localhost:5000/addSet", {
        name: newCardGroupInput,
        userId: userId,
      });
      getSets();
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  const getSets = async () => {
    try {
      const sets = await axios.get("http://localhost:5000/getSets", {
        headers: {
          userId: `${userId}`,
        },
      });
      setGetCardGroups([...sets.data]);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    try {
      await axios.delete("http://localhost:5000/logout");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const axiosJWT = axios.create();

  axiosJWT.interceptors.request.use(
    async (config) => {
      const currentDate = new Date();
      if (expire * 1000 < currentDate.getTime()) {
        const response = await axios.get("http://localhost:5000/token");
        config.headers.Authorization = `Bearer ${response.data.accessToken}`;
        setToken(response.data.accessToken);
        const decoded = jwt_decode(response.data.accessToken);
        setExpire(decoded.exp);
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return (
    <div className='w-full h-full flex flex-row-reverse'>
      <button className='absolute top-4 right-4' onClick={logout}>
        Logout
      </button>

      {newcardGroupOverlay && (
        <div
          onClick={handleNewcardGroupOverlayClick}
          className='fixed top-0 left-0 right-0 bottom-0 z-50 bg-black opacity-[97%] flex flex-col gap-4 justify-center items-center'
        >
          <h2 className='text-3xl'>Add new Flashcard set</h2>
          <input
            type='text'
            placeholder='Name of new set'
            className='px-4 py-2 rounded'
            onChange={(e) => setNewCardGroupInput(e.target.value)}
          />

          <button onClick={handleNewGroupClick}>Add set</button>
        </div>
      )}

      <div className='main-window w-[77%] h-full flex flex-col items-center justify-center'>
        <h1 className='text-5xl absolute top-4'>Flashcards</h1>
        <h2 className='text-3xl'>Welcome to flashcards, blah blah</h2>
        <button onClick={() => setNewcardGroupOverlay(true)} className='mt-4'>
          add new set
        </button>
      </div>

      <div className='side-bar flex flex-col gap-4 w-[23%] h-full border-r-2 p-2 absolute left-0'>
        <h1 className='text-3xl text-center relative top-2'>Card Sets</h1>
        <div>
          <ul className='flex flex-col gap-2'>
            {/* maps the state array to list items from database */}
            {getCardGroups.map((cards, index) => (
              <li key={index} className='cursor-pointer border-b-2'>
                {cards.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage;