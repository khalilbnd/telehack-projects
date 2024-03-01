import React, { useState } from "react";
import "../styles/form.css";
const SignUpForm = () => {
  const [clientNumber, setClientNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

  };
  return (
    <div className="signup-container">
      <h2 className="title">Sign Up</h2>
      <h3>Enter your Account Details</h3>
      <form className="sign-up-form" onSubmit={handleSubmit}>
      <input
        placeholder="Client number"
        type="text"
        id="client-number"
        value={clientNumber}
        onChange={(e) => setClientNumber(e.target.value)}
      />
      <input
        placeholder="Phone number"
        type="tel"
        id="phone-number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <input
        placeholder="Email"
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="Password"
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        placeholder="confirm-password"
        type="password"
        id="confirm-password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button className='submit-btn sm-btn' type="submit">Sign up</button>
    </form>
    </div>
  );
};
export default SignUpForm;