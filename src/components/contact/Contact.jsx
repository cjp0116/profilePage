import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
const Contact = () => {
  const form = useRef();
  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      const res = await emailjs.sendForm(
        "service_eo42q1r",
        "template_sg6umri",
        form.current,
        "Dlc8F2y0CcKHItoGv"
      );
      e.target.reset();
      console.log(res.text);
    } catch (error) {
      console.error(error.text);
    }
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>jc960116@gmail.com</h5>
            <a href="mailto:jc960116@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <FaFacebookMessenger className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Jae Cho</h5>
            <a href="https://m.me/jae.cho.12/" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+2132483654</h5>
            <a
              target="_blank"
              href="https://api.whatsapp.com/send?phone=2132483654"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <AiFillLinkedin className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <h5>Jae Cho</h5>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/jae-cho-60171a15a/"
            >
              Send Invitation or Message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="text" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
