import { useState } from "react";
import emailjs from "@emailjs/browser";
// eslint-disable-next-line import/no-extraneous-dependencies
import { ToastContainer, toast } from "react-toastify";
// eslint-disable-next-line import/no-extraneous-dependencies
import "react-toastify/dist/ReactToastify.css";

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

    const {
      VITE_EMAILJS_SERVICE_ID,
      VITE_EMAILJS_TEMPLATE_ID,
      VITE_EMAILJS_PUBLIC_KEY,
    } = import.meta.env;
    const emailServiceId = VITE_EMAILJS_SERVICE_ID;
    const emailTemplateId = VITE_EMAILJS_TEMPLATE_ID;
    const emailPublicKey = VITE_EMAILJS_PUBLIC_KEY;

    emailjs
      .send(
        emailServiceId,
        emailTemplateId,
        {
          name,
          email,
          subject,
          message,
        },
        emailPublicKey
      )
      .then((response) => {
        toast.success("Your message was taken into account!", response);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        toast.error("Error sending email:", error);
      });
  };

  return (
    <div className="contactContainer">
      <h1>Contact form</h1>
      <form onSubmit={handleSubmit}>
        {" "}
        {(name, email, subject, message)}
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
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </div>
      </form>
    </div>
  );
}

export default Contact;
