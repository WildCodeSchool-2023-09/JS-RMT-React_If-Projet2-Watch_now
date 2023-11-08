import "./Contact.css";

function Contact() {
  return (
    <div className="contactContainer">
      <h4>Contact form </h4>
      <form>
        <input type="text" name="name" placeholder="Name" />

        <input type="email" name="email" placeholder="Mail" />

        <input type="text" name="subject" placeholder="Subject" />

        <textarea
          name="subject"
          placeholder="Write your message here"
          rows="8"
          cols="50"
        />

        <div className="contactBtn">
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
