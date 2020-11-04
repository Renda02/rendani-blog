function Contact() {
  return (
    <div className="form">
      <h2 className="form__heading">Contact me</h2>
      <div className="form__row">
        <div className="col">
          <div className="form__input">
            <input type="text" name="" required="required" />
            <span className="text">First Name</span>
            <span className="line"></span>
          </div>
        </div>

        <div className="col">
          <div className="form__input">
            <input type="text" name="" required="required" />
            <span className="text">Last Name</span>
            <span className="line"></span>
          </div>
        </div>
      </div>
      <div className="form__row">
        <div className="col">
          <div className="form__input">
            <input type="text" name="" required="required" />
            <span className="text">Email</span>
            <span className="line"></span>
          </div>
        </div>
        <div className="col">
          <div className="form__input">
            <input type="text" name="" required="required" />
            <span className="text">Mobile Number</span>
            <span className="line"></span>
          </div>
        </div>
      </div>
      <div className="form__row">
        <div className="col">
          <div className="form__input textarea">
            <textarea required="required"></textarea>
            <span className="text">Type your message here..</span>
            <span className="line"></span>
          </div>
        </div>
      </div>
      <div className="form__row">
        <div className="col">
          <input type="submit" value="Send"/>
        </div>
      </div>
    </div>
  );
}

export default Contact;
