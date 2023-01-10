import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [successfulSignUp, setSuccessfulSignUp] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleLoginSwitch = () => {
    navigate("/login");
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:5000/users", {
          email: email,
          password: password,
          confPassword: confPassword,
        })
        .then((res) => {
          console.log(res);
        });
      navigate("/login");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div className='w-full h-full bg-violet-800 flex flex-col justify-center items-center'>
      <h1 className='text-4xl font-bold text-neutral-300 relative mt-10'>
        Flashcards!
      </h1>
      <p className='mt-4 grow'>Interactive flashcards for studying</p>
      <form
        method='get'
        className='form-control grow flex items-center max-w-[90%] gap-2 login-form'
      >
        <label htmlFor='email' className='input-group flex max-w-full'>
          <span className='grow shrink-0 flex justify-center'>Email:</span>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='info@site.com'
            className='input input-bordered outline-none focus:outline-none shrink-0'
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label htmlFor='password' className='input-group max-w-full flex'>
          <span className='grow justify-center'>Password:</span>
          <input
            type='password'
            name='password'
            id='password'
            placeholder='Enter your password'
            className='input input-bordered outline-none focus:outline-none'
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label htmlFor='passwordConfirm' className='input-group max-w-full'>
          <span>Confirm Password:</span>
          <input
            type='password'
            name='passwordConfirm'
            id='passwordConfirm'
            placeholder='Confirm your password.'
            className='input input-bordered outline-none focus:outline-none'
            required
            onChange={(e) => setConfPassword(e.target.value)}
          />
        </label>
        {/* {signUpUserExists === true && (
          <div className='text-red-500'>
            User already exists, please sign in.
          </div>
        )}
        {signInNoUser === true && (
          <div className='text-red-500'>No User found, please sign up.</div>
        )} */}

        <div className='w-[80%]'>
          <button
            type='submit'
            className='btn btn-primary mt-2 w-full bg-slate-300 text-violet-800 hover:bg-violet-800 hover:text-slate-300'
            onClick={handleSignUp}
          >
            Sign up!
          </button>
          <div className='flex justify-center'>
            <a
              className='cursor-pointer text-slate-300 mt-2'
              onClick={() => navigate("/login")}
            >
              Already have account? Sign In
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
