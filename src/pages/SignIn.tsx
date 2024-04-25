import React, { useState } from "react";
import { useAppDispatch } from "../hooks/redux-hooks";
import { login } from "../slices/authSlice";
import Form from "../components/Form";
import { Link } from "react-router-dom";

const SignIn: React.FC = () => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (email && password) {
      try {
        await dispatch(
          login({
            email,
            password,
          })
        ).unwrap();
      } catch (e) {
        console.error(e);
      }
    } else {
      console.error("Error is coming while login");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8  bg-[#fff] shadow p-5 pb-10">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <Form
          onSubmit={handleSubmit}
          email={email} 
          setEmail={setEmail}
          password={password} 
          setPassword={setPassword}
        />

        <Link
          to="/signup"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <button>Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
