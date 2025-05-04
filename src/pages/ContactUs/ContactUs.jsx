import React, { useState } from "react";
import "./ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!formData.name || !formData.email || !formData.mobile || !formData.message) {
      alert("All fields are required!");
      setIsSubmitting(false);
      return;
    }

    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address.");
      setIsSubmitting(false);
      return;
    }

    if (!phoneRegex.test(formData.mobile)) {
      alert("Please enter a valid 10-digit mobile number.");
      setIsSubmitting(false);
      return;
    }

    const formURL =
      "https://docs.google.com/forms/d/e/1FAIpQLSeyS03Oa2G97c4HhBJmuc0WhfSOpjdrxl3LU9vLlLZjwhtbQw/formResponse";

    const formDataToSend = {
      "entry.1341397609": formData.name,
      "entry.1634955362": formData.email,
      "entry.640354415": formData.mobile,
      "entry.1060261893": formData.message,
    };

    const formBody = new URLSearchParams(formDataToSend);

    try {
      await fetch(formURL, {
        method: "POST",
        body: formBody,
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      alert("Your message has been sent successfully!");
      setFormData({ name: "", email: "", mobile: "", message: "" });
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-container">
      <h1 className="contact-heading">CONTACT US</h1>
      <p className="contact-subtext">
        If you have any questions or would like to schedule a consultation, please contact us.
      </p>

      {/* <p className="contact-info">📧<b>Email:</b>  abandco.surat@gmail.com</p>
      <p className="contact-info">📞<b>Phone:</b>  0261-4531968</p> */}
      <p className="contact-info">
        <span className="contact-label"><b>Email   :</b></span>
        <span className="contact-value">abandco.surat@gmail.com</span>
      </p>
      <p className="contact-info">
        <span className="contact-label"><b>Phone    :</b></span>
        <span className="contact-value">0261-4531968</span>
      </p>



      <section className="contact-form-section">
        <h2 className="form-title">GET IN TOUCH</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="form-input"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
            required
          />
          <input
            type="tel"
            name="mobile"
            placeholder="Your Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            className="form-input"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="form-textarea"
            required
          ></textarea>
          <button type="submit" className="submit-button" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </section>

      <section className="map-section">
        <h2 className="map-title">OUR LOCATION</h2>
        <div className="map-wrapper">
          <iframe
            title="Our Office Location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d930.251286471024!2d72.7746252!3d21.1521935!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04d8be5423ffb%3A0x1576414c0877c525!2sHomeland%20City!5e0!3m2!1sen!2sin!4v1745517640047!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            className="map-iframe"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
