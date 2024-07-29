import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

export default function Login1() {
  const handleClickL = () => navigate("/");

  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function usermenu(event) {
    event.preventDefault();

    window.localStorage.setItem("isLoggedIn", email);
    console.log(window.localStorage.getItem("isLoggedIn"));

    try {
      await axios
        .post("http://localhost:8082/vendor/login", {
          email: email,
          password: password,
        })
        .then(
          (res) => {
            console.log(res.data);

            if (res.data.message === "email not exist") {
              alert("email not exist");
            } else if (res.data.message === "Login Success") {
              navigate("/vieworders", {
                state: { email: email, password: password },
              });
            } else {
              setTimeout(() => {}, 2000);
            }
          },
          (fail) => {
            console.error(fail);
          }
        );
    } catch (err) {
      alert(err);
    }
  }

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="../bogo.jpg"
            alt="Your Company"
            style={{ height: "80px", maxWidth: "150px", borderRadius: "8px" }}
          />
          <h1 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h1>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  <h3>Username</h3>
                </label>
              </div>
              <div className="input-group mb-3">
                <input
                  id="username"
                  name="usrename"
                  type="number"
                  required
                  onChange={(event) => {
                    setemail(event.target.value);
                  }}
                  className="form-control"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  <h3>Password</h3>
                </label>
              </div>
              <div className="input-group mb-3">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                  className="form-control"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                onClick={usermenu}
                className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Login
              </button>
            </div>
          </form>
          <form>
            <p className="mt-10 text-center text-sm text-gray-500">
              <button
                type="submit"
                onClick={handleClickL}
                className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Previous
              </button>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
