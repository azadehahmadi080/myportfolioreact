import React, { useState } from "react";

export default function Contact() {
  const [formMessage, setFormMessage] = useState("");
  const [sending, setSending] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    setFormMessage("Sending...");

    const form = new FormData(e.target);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form
      });
      const json = await res.json();
      if (json.success) {
        setFormMessage("✅ Thank you! Your message has been sent successfully.");
        e.target.reset();
      } else {
        setFormMessage("❌ Error: " + (json.message || "Unknown error"));
      }
    } catch (err) {
      setFormMessage("❌ Something went wrong. Please try again.");
    } finally {
      setSending(false);
      setTimeout(() => setFormMessage(""), 4000);
    }
  }

  return (
    <section className="contact" id="contact">
      <h2 className="section-title"><span>Contact</span> Me</h2>

      <form onSubmit={handleSubmit} className="contact-form" data-aos="fade-up">
        <input type="hidden" name="access_key" value="74e806b1-402f-4943-91ba-8c625ad182a3" />

        <input type="text" id="name" name="name" placeholder="Your Name" required />
        <input type="email" id="email" name="email" placeholder="Your Email" required />
        <textarea id="message" name="message" placeholder="Your Message" rows="5" required />

        <button type="submit" disabled={sending}>{sending ? "Sending..." : "Send Message"}</button>
      </form>

      {formMessage && <div id="form-message" className="form-message show">{formMessage}</div>}
    </section>
  );
}
