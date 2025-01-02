import React, { useState } from "react";
import "../assets/login.png";
import "./login.css";
import Back from "../components/back";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const history = useNavigate();
  const [password, setPassword] = useState<string>("");
  const [username, setusername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    const emailCheck = (email: string): boolean => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.(com|net|org|edu|gov|io|co|uk)$/i;
      return emailRegex.test(email);
    }

    if (!emailCheck(email) || username.trim() == "") {
      setError("Enter valid email");
      setLoading(false);
      return;
    };

    if (username.trim() == "") {
      setError("Enter a valid username");
      setLoading(false);
      return;
    }
    if (password.length < 8) {
      setError("Password must be atleast 8 characters");
      setLoading(false);
      return;
    }

    const userInfo = {
      email:email,
      username: username,
    }
    localStorage.setItem("user", JSON.stringify(userInfo));
    setTimeout(() => {
      history("/user/name");
    }, 200);
  };

  return (
    <div className="flex h-screen">
      <div className="w-[60%] lftimg"></div>
      <div className="w-[40%] bg-white">
        <Back />
        <div className=" pt-10 px-12">
          <h1 className="font-bold text-3xl font-sans text-center ">
            Welcome back!
          </h1>
          <p className="text-gray-600 font-semibold text-center mt-4">
            Enter your dettails
          </p>
          <div className="flex flex-col mt-9 ml-10 ">
            <form onSubmit={handleSubmit} className="space-y-9 ">
              <input
                type="text"
                className="text-black border-b-2 border-black outline-none bg-slate-200 p-2 w-[350px] font-sans font-semibold"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                className="text-black border-b-2 border-black outline-none bg-slate-200 p-2 w-[350px] font-sans font-semibold"
                placeholder="Username"
                value={username}
                onChange={(e) => setusername(e.target.value)}
              />
              <input
                type="password"
                className="text-black border-b-2 border-black outline-none bg-slate-200 p-2 w-[350px] font-sans font-semibold"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {error && <p className="text-red-600 text-sm font-semibold ">{error}</p>}
              <label className="text-gray-600 font-mono space-x-2 flex">
                <input type="checkbox" />
                <p>remeber me</p>
              </label>
              <button
                type="submit"
                className="bg-black w-[250px] text-white font-semibold rounded-lg text-center p-2 ml-12 active:bg-slate-800"
              >
                {loading ? "Loading..." : ("Log in")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
