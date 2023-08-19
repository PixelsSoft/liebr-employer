import React from "react";

import { useNavigate } from "react-router-dom";

import { Images } from "../../Constant/Constant";

export default function Login() {
  const navigate = useNavigate();

  const onSubmit = () => {
    console.log("onsubmit");
    navigate("/Dashboard");
  };
  return (
    <div
      className="d-flex justify-content-center align-items-center bg-secondary-subtle"
      style={{ height: "100vh " }}
    >
      <div className="bg-light-subtle  p-5 rounded w-50">
        <img
          style={{ width: "150px", marginBottom: 10 }}
          src={Images.logo}
          alt="Logo"
        />
        <p className="mb-3">Log in with email</p>

        <div className="col-sm-12 mb-3">
          <input
            type="email"
            placeholder={"Email"}
            className="form-control"
            id="inputEmail3"
          />
        </div>

        <div className="col-sm-12  mb-3">
          <input
            type="password"
            placeholder={"Password"}
            className="form-control"
            id="inputPassword3"
          />
        </div>
        <p className={"text-body-tertiary"}>
          Forgot password?
          {/* You can either choose to <text style={{ color: "#691edd" }}> Login without a password </text>or  */}
          <text style={{ color: "#691edd" }}>Reset your password.</text>
        </p>

        <button
          onClick={() => {
            onSubmit();
          }}
          style={{ backgroundColor: "#00ff86" }}
          type="submit"
          className="btn w-100"
        >
          Login
        </button>
      </div>
    </div>
  );
}
