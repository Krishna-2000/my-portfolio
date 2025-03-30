import "./Contact.css";

export default function Contact() {
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
      <div className="contact-form">
        <div className="input-row">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
        </div>
        <input type="text" placeholder="Phone" />
        <textarea placeholder="Message"></textarea>
        <button type="submit">Send</button>
      </div>

      
    </div>
  );
}
