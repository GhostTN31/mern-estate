import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//loader gif
import loader from "../assets/loader.gif";
//Redux hooks
import { useDispatch, useSelector } from "react-redux";
//redux slices
import { signInStart, signInSuccess, signInFailure } from "../redux/userSlice";

const Signin = () => {
  const [formData, setFormdata] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormdata({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };
  // console.log(formData);
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* <input
          type="text"
          placeholder="username"
          className="border p-3 rounded-lg focus: outline-gray-500"
          id="username"
          onChange={handleChange}
        /> */}

        <input
          type="email"
          placeholder="email"
          className="border p-3 rounded-lg focus: outline-gray-500"
          id="email"
          onChange={handleChange}
        />

        <input
          type="password"
          placeholder="password"
          className="border p-3 rounded-lg focus: outline-gray-500"
          id="password"
          onChange={handleChange}
        />

        <button
          disabled={loading}
          className="bg-slate-600 p-3 text-white rounded-lg uppercase hover:bg-slate-700 disabled:opacity-70 duration-300 delay-100"
        >
          {loading ? (
            <img src={loader} alt="Loading..." className="h-6 mx-auto" />
          ) : (
            "Sign In"
          )}
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Don't have an account?</p>
        <Link to={"/sign-up"}>
          <span className="text-blue-400">Sign Up</span>
        </Link>
      </div>
      {error && <p className="text-red-500 mt-5">{error}</p>}
    </div>
  );
};

export default Signin;
