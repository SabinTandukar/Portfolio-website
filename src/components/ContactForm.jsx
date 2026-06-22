import { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" /> <br />
      <input type="email" placeholder="Email" /> <br />
      <textarea placeholder="Message"></textarea>
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;
