import styled from "styled-components";


function Contact() {
  return (
    <Form>
      <Heading>Get in touch with me </Heading>
      <FormWrapper>
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
      </FormWrapper>
    </Form>
  );
}

export default Contact;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background: #333;
`;

const Heading = styled.h2`
  text-align: center;
  text-decoration: underline;
  font-family: cooperboldbt;
  text-underline-position: under;
  color: #fff;
  letter-spacing: 2px;
`;

const FormWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  margin-top: 20px;
`;
