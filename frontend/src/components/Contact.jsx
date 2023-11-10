/* eslint-disable no-restricted-syntax */
import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Subject:", subject);
    console.log("Message:", message);
  };
  return (
    <div className="contactContainer">
      <h4>Contact from </h4>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Mail"
          value={email}
          onChange={handleEmailChange}
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={subject}
          onChange={handleSubjectChange}
        />

        <textarea
          name="message"
          placeholder="Write your message here"
          rows="8"
          cols="50"
          value={message}
          onChange={handleMessageChange}
        />

        <div className="contactBtn">
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
