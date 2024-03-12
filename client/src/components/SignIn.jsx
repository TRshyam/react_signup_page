import React, { useState } from 'react';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();


    const userData = JSON.parse(localStorage.getItem('formDataArray')) || [];
    console.log(userData);
    const user = userData.find((user) =>{
      user.email === email;
      
      console.log(user.email + " : " + email );
      console.log(user.password +"::"+password);
      console.log("this is user");
      console.log("this is user");
      console.log("this is user");
      console.log(user);
      
      if (user.email === email && user.password === password){
        console.log('User signed in Succesfully');
        alert('User signed in successfully!');

        setError('')
      }
      else{
        setError('Invalid Email or Password!')
      }


    });

  };

    const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
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
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
          <h1 className="text-center text-xl font-bold">Sign in</h1>
        </div>
        <form onSubmit={handleSubmit}>
                    {error && <p className="text-red-500 mb-4">{error}</p>}

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
              value={email}
              onChange={handleEmailChange}

              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              autoComplete="email"
              autoFocus
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}              
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              autoComplete="current-password"
              required
            />
          </div>
          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox mr-2"
                value="remember"
              />
              <span className="text-sm">Remember me</span>
            </label>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign In
          </button>
        </form>
        <div className="mt-4">
          <a
            href="#"
            className="text-xs text-blue-500 hover:underline"
          >
            Forgot password?
          </a>
        </div>
        <div className="mt-4">
          <a
            href="/SignUp"
            className="text-xs text-gray-600 hover:underline"
          >
            Don't have an account? Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}
