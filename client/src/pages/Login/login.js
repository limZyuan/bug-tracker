import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

export default function login(props) {
  return (
    <div className="container flex login-main-container">
      <div className="login-container flex p-3">
        <div className="login-avatar flex">
          <i className="fas fa-user" />
        </div>
        <h1 className="md">Sign In</h1>
        <form
          className="login-form my-2 flex"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <label htmlFor="uname" className="login-label">
            Username
          </label>
          <input
            placeholder="Enter Email"
            className="login-input"
            type="email"
            name="uname"
            required
          />
          <label htmlFor="psw" className="login-label">
            Password
          </label>
          <input
            className="login-input"
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />
          <Link to="/dashboard" className="btn my-1" type="submit">
            Login
          </Link>
        </form>
      </div>
      <svg
        className="wave"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#4ed4cd"
          fillOpacity="1"
          d="M0,160L30,181.3C60,203,120,245,180,256C240,267,300,245,360,218.7C420,192,480,160,540,128C600,96,660,64,720,80C780,96,840,160,900,160C960,160,1020,96,1080,80C1140,64,1200,96,1260,117.3C1320,139,1380,149,1410,154.7L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}
