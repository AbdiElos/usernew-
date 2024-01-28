import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./ForgetPassword.css";
import email_icon from "./Assets/email.png";
import { Forget } from "../service/sys_service";


function ForgetPassword () {

  const navigate = useNavigate();
  const [data, setData] = useState({ email: "", password: "" });
  const [error1, setError] = useState("");


  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    Forget(data.email).then((res) => {
      if (res.success && res.data) {
        console.log(res.data);
        //  navigate("/verification")
      } else {
        console.log(res.error);
      }
    });

  };
  
//d
  return (
    <div className="forget">
      <div className="welcome">
        <h1 className="greeting">Welcome !</h1>
        <div class="triangle-left"></div>
        <p className="paragraph">
          From chaos to clarity.simplify user management 
           and say goodbye Your
          spreadsheets.
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
          <p className="forget-text1">Enter your email for verification process.We will send 4 digits code to your email.</p>
        </div>

        <div className="forget-inputs">
          <form className="forget-input" onSubmit={handleSubmit}>
           <img src={email_icon} alt="" /> 
           <input type="email" placeholder="email" name="email" onChange={handleChange} value={data.email} 
                    required
                />
                         
          </form>
        </div>
        <div className="forget-submit-containerf">
        <button className="forget-submitf" onClick={handleSubmit}>CONTINUE</button>
        </div>
      </div>
    </div>
  );
};
export default ForgetPassword;