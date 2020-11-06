function Contact() {
  return (
    <div className="form">
      <h2 className="form__heading">Get in touch with me </h2>
      
      <div className="contact-form">
        <div>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="text" placeholder="Last Name" />
            <br />
            <input type="Email" placeholder="Email" required />
            <br />
            <input type="text" placeholder="Subject of this message" />
            <br />
            <textarea
              name="message"
              placeholder="Message"
              rows="5"
              required
            ></textarea>
            <br />
            <button className="submit">Send Message</button>
          </form>
        </div>
      </div>
      
    </div>
  );
}

export default Contact;
