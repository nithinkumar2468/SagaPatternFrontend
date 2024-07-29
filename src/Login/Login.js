import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

export default function Login() {
  /* const handleClickL = () => navigate("/"); */

  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  async function onSubmit() {
    try {
      await axios
        .post("http://localhost:8081/users/login", {
          email: email,
          password: password,
        })
        .then(
          (res) => {
            console.log(res.data);

            if (res.data.message === "email not exist") {
              alert("email not exist");
            } else if (res.data.message === "Login Success") {
              navigate("/viewproducts", {
                state: { email: email, password: password },
              });
            } else {
              setTimeout(() => {
              }, 2000);
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
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="./bogo.jpg"
          alt="Your Company"
          style={{ height: "80px", maxWidth: "150px", borderRadius: "8px" }}
        />
        <h1 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h1>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={(e) => onSubmit(e)}>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                <h3>Email address</h3>
              </label>
            </div>
            <div className="input-group mb-3">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
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
                autoComplete="current-password"
                required
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                className="form-control"
              />
            </div>
          </div>
          <div>
            <button type="submit" className="btn btn-outline-primary">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
