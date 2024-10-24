import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="username"
          className="border p-3 rounded-lg focus: outline-gray-500"
          id="username"
        />

        <input
          type="email"
          placeholder="email"
          className="border p-3 rounded-lg focus: outline-gray-500"
          id="email"
        />

        <input
          type="password"
          placeholder="password"
          className="border p-3 rounded-lg focus: outline-gray-500"
          id="password"
        />

        <button className="bg-slate-600 p-3 text-white rounded-lg uppercase hover:bg-slate-700 disabled:opacity-70 duration-300 delay-100">
          Sign up
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to={"/Sign-in"}>
          <span className="text-blue-400">Sign in</span>
        </Link>
      </div>
    </div>
  );
};

export default Signup;
