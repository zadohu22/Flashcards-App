import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

const Input = (props) => {

  const [question, setQuestion] = useState("");
  const [answerOne, setAnswerOne] = useState("");
  const [answerTwo, setAnswerTwo] = useState("");
  const [answerThree, setAnswerThree] = useState("");
  const [answerFour, setAnswerFour] = useState("");
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    refreshToken();
    getUsers();
  }, []);

  const refreshToken = async () => {
    try {
      const response = await axios.get("http://localhost:5000/token");
      setToken(response.data.accessToken);
      const decoded = jwt_decode(response.data.accessToken);
      setExpire(decoded.exp);
    } catch (error) {
      if (error.response) {
        navigate("/");
      }
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

  const getUsers = async () => {
    const response = await axiosJWT.get("http://localhost:5000/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setUsers(response.data);
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuestion("");
    setAnswerOne("");
    setAnswerTwo("");
    setAnswerThree("");
    setAnswerFour("");
    console.log(answerOne, answerTwo, answerThree, answerFour);
  };

  const Logout = async () => {
    try {
      await axios.delete("http://localhost:5000/logout");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  //   const handleLogOut = () => {
  //     props.setIsLoggedIn(false);
  //   };

  //   const addData = () => {
  //     Axios.post("http://localhost:5000/add", {
  //       question: question,
  //       answerOne: answerOne,
  //       answerTwo: answerTwo,
  //       answerThree: answerThree,
  //       answerFour: answerFour,
  //     }).then(() => {
  //       console.log("data added");
  //     });
  //   };

  return (
    <div className='w-full h-full bg-red-300 flex flex-col justify-center items-center'>
      <button
        className='btn btn-primary absolute top-4 right-4'
        onClick={Logout}
      >
        Log Out
      </button>
      <form
        className='p-4 bg-slate-400 flex flex-col gap-4 justify-center items-center h-auto min-w-[60%]'
        onSubmit={handleSubmit}
        method='GET'
      >
        <div className='flex flex-col max-w-full labelContainer'>
          <label htmlFor='question'>Question</label>
          <input
            type='text'
            name='question'
            id='question'
            placeholder='Enter a question'
            className='inputCustom'
            onChange={(event) => setQuestion(event.target.value)}
            value={question}
          />

          <label htmlFor='question'>Answer One</label>
          <input
            type='text'
            name='answerOne'
            id='answerOne'
            placeholder='Enter answer one'
            className='inputCustom'
            onChange={(event) => setAnswerOne(event.target.value)}
            value={answerOne}
          />

          <label htmlFor='question'>Answer Two</label>
          <input
            type='text'
            name='answerTwo'
            id='answerTwo'
            placeholder='Enter answer two'
            className='inputCustom'
            onChange={(event) => setAnswerTwo(event.target.value)}
            value={answerTwo}
          />

          <label htmlFor='question'>Answer Three</label>
          <input
            type='text'
            name='answerThree'
            id='answerThree'
            placeholder='Enter answer three'
            className='inputCustom'
            onChange={(event) => setAnswerThree(event.target.value)}
            value={answerThree}
          />

          <label htmlFor='question'>Answer Four</label>
          <input
            type='text'
            name='answerFour'
            id='answerFour'
            placeholder='Enter answer four'
            className='inputCustom'
            onChange={(event) => setAnswerFour(event.target.value)}
            value={answerFour}
          />
        </div>

        <input
          type='submit'
          value='Submit'
          className='border-2 border-black py-2 px-4 cursor-pointer text-black'
          //   onClick={addData}
        />
      </form>
    </div>
  );
};

export default Input;
