import React, { useState } from "react";
import "../Styles/Contactform.css";

const Contactstuff = () => {
  const [status, setStatus] = useState("Submit");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };

  return (
    <form className = "contact" onSubmit={handleSubmit}>
      <h1 className="header1"> Contact Us </h1>
      <div>
        <input className = "input1" type="text" id="name" placeholder="Name"required />
      </div>
      <div>
        <input className = "input1" type="email" id="email" placeholder="E-mail" required />
      </div>
      <div>
        <textarea className = "message" id="message" rows="10" cols="20" placeholder="Message"required />
      </div >
      <button type="submit">{status}</button>
    </form>
  );
};


export default Contactstuff;