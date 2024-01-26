import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./ForgetPassword.css";
import email_icon from "./Assets/email.png";
import { forgotPassword } from "../service/sys_service";

const ForgetPassword = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({ email: "" });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    const { value } = event.target;
    setData({ ...data, email: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    forgotPassword(data.email)
      .then((res) => {
        if (res.success && res.data) {
          console.log(res.data);
          navigate("/setup");
        } else {
          console.log(res.error);
          setError("An error occurred. Please try again.");
        }
      })
      .catch((error) => {
        console.log(error);
        setError("An error occurred. Please try again.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="forget">
      <div className="welcome">
        <h1 className="greeting">Welcome !</h1>
        <div class="triangle-left"></div>
        <p className="paragraph">
          From chaos to clarity. Simplify user management and say goodbye to
          your spreadsheets.
        </p>
        <h2>Your time</h2>
        <h2>Your data</h2>
        <h2>Your peace of mind!</h2>
        <div class="rectangle"></div>
        <div class="circle"></div>
      </div>

      <div className="forget-page">
        <div className="forget-header">
          <div className="forget-text">FORGOT PASSWORD</div>
          <p className="forget-text1">
            Enter your email for the verification process. We will send a
            4-digit code to your email.
          </p>
        </div>

        <div className="forget-inputs">
          <form className="forget-input" onSubmit={handleSubmit}>
            <img src={email_icon} alt="" />
            <input
              type="email"
              placeholder="Enter your email"
              onChange={handleChange}
              value={data.email}
              required
            />
          </form>
          {message && (
            <div className="mt-10 bg-green-700 mx-auto w-2/5 p-3 rounded-lg shadow-lg text-white text-lg">
              <p>{message}</p>
            </div>
          )}
          {error && (
            <div className="mt-10 bg-red-700 mx-auto w-2/5 p-3 rounded-lg shadow-lg text-white text-lg">
              <p>{error}</p>
            </div>
          )}
        </div>
        <div className="forget-submit-containerf">
          <button className="forget-submitf" disabled={isLoading}>
            CONTINUE
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;