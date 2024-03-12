import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";


export default function SignUp() {

  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);


  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    console.log(data);

    const newEmail = data.get('email');

    const existingData = JSON.parse(localStorage.getItem('formDataArray')) || [];

    
    const emailExists = existingData.some((formData) => formData.email === newEmail);

    if (emailExists) {
      setErrorMessage('Email already exists. Please choose a different email.');
    } else {
    
    
      const formDataObject = {};
      data.forEach((value, key) => {
        formDataObject[key] = value;
      });

    
      existingData.push(formDataObject);

      localStorage.setItem('formDataArray', JSON.stringify(existingData));

      console.log('Form data saved to localStorage.');
      alert("Your information has been submitted!");
    }
  };
    const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };


  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col w-full max-w-md">
        <div className="mb-4">
          <svg
            className="w-10 h-10 mx-auto mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 6v.01M3 10v11a2 2 0 002 2h14a2 2 0 002-2V10"
            ></path>
          </svg>
          <h1 className="text-center text-xl font-bold">Sign Up</h1>
        </div>
        <form onSubmit={handleSubmit}>
             <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              autoComplete="username"
              autoFocus
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              autoComplete="email"
              required
            />
          </div>
          <div className="mb-4 relative">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              autoComplete="new-password"
              minLength={8}
              required
            />
                        <button
              type="button"
              onClick={toggleShowPassword}
              className="absolute  right-0 px-3 py-2  "
            >
              {showPassword ? <LuEye /> : <LuEyeOff/>}
            </button>
          </div>
                    {errorMessage && <p className="text-red-500">{errorMessage}</p>}

          <button
            type="submit"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-4">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            
            <Link to="/" className="text-blue-500 hover:underline">
              Sign In
            </Link>

          </p>
        </div>
      </div>
    </div>
  );
}




          
          
         