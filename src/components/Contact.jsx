function Contact() {
  return (
    <div className="form">
      <h2>Contact me</h2>
      <form action="">
        <div className="input">
          <input type="text" />
          <label>First Name</label>
        </div>
        <div className="input">
          <input type="text" />
          <label>Last Name</label>
          <div className="input__data">
            <input type="text" />
            <label>Email Adress</label>
          </div>
          <div className="input__data">
            <input type="text" />
            <label>Company's Name</label>
          </div>
         
        </div>
              <br />
              <input type="submit"/>
      </form>
    </div>
  );
}

export default Contact;