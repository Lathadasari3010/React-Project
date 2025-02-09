import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", password: "", subject: "", message: "" });
  };

  return (
    <>
    <section className="container mt-5">
      <div className="row align-items-center">
        {/* Left Side: Contact Details with Image */}
        <div className="col-md-6 text-center">
          <img
            src="contact.jpeg"
            alt="Contact Us"
            className="img-fluid rounded shadow"
          />
          <h2 className="mt-4 text-primary fw-bold">Get in Touch</h2>
          <p className="text-muted">We’re here to assist you! Reach out to us anytime.</p>
          <p className="fw-bold text-dark">
            📧 Email: <span className="text-primary">support@example.com</span>
          </p>
          <p className="fw-bold text-dark">
            📞 Phone: <span className="text-success">+1 (234) 567-890</span>
          </p>
          <p className="fw-bold text-dark">
            📍 Address: <span className="text-danger">123 Main St, New York, USA</span>
          </p>
        </div>

        {/* Right Side: Contact Form */}
        <div className="col-md-6">
          <h2 className="text-primary fw-bold text-center">Contact Us</h2>

          {submitted && <div className="alert alert-success text-center">Your message has been sent!</div>}

          <form
            onSubmit={handleSubmit}
            className="p-4 border rounded shadow"
            style={{ backgroundColor: "#f8f9fa" }}
          >
            <input
              type="text"
              name="name"
              className="form-control mb-3 border-primary"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{ maxWidth: "400px", margin: "0 auto" }} // Reduce width
            />
            <input
              type="email"
              name="email"
              className="form-control mb-3 border-primary"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              style={{ maxWidth: "400px", margin: "0 auto" }} // Reduce width
            />
            <input
              type="password"
              name="password"
              className="form-control mb-3 border-primary"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              style={{ maxWidth: "400px", margin: "0 auto" }} // Reduce width
            />
            <input
              type="text"
              name="subject"
              className="form-control mb-3 border-primary"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              style={{ maxWidth: "400px", margin: "0 auto" }} // Reduce width
            />
            <textarea
              name="message"
              className="form-control mb-3 border-primary"
              placeholder="Your Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              style={{ maxWidth: "400px", margin: "0 auto" }} // Reduce width
            ></textarea>
            <button type="submit" className="btn btn-primary w-100 fw-bold" style={{ maxWidth: "400px", margin: "0 auto" }}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
    </>
  );
}

export default ContactUs;
