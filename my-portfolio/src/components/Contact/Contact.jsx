import "./Contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log('here');
    emailjs
      .sendForm(
        "service_2i91l2n", // 👈 Replace with your actual Service ID
        "template_oobrdri", // 👈 Replace with your actual Template ID
        form.current,
        "b2F23fssF261T--3b" // 👈 Replace with your actual Public Key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Something went wrong, try again.");
          console.error(error);
        }
      );
  };
  return (
    <div className="contact-container">
      {/* Left Section */}
      <div className="contact-info">
        <h2>CONTACT</h2>
        <p>
          Feel free to get in touch with me for any opportunities, collaborations, or
          inquiries. I'm open to new projects and challenges. Let's connect and discuss
          how we can work together to achieve your goals.
        </p>
        <p><strong>Tel:</strong> +91 9446449976</p>
        <p>
          <strong>Email:</strong> <a href="mailto:krishnakichu1907@gmail.com">krishnakichu1907@gmail.com</a>
        </p>
      </div>

      {/* Right Section - Contact Form */}
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className="input-row">
          <input type="text" name="name" placeholder="Name" />
          <input type="email" name="email" placeholder="Email" />
        </div>
        <input type="text" placeholder="Phone" name="phone" />
        <textarea placeholder="Message" name="message"></textarea>
        <button type="submit">Send</button>
      </form>

      
    </div>
  );
}
