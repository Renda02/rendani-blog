import styled from "styled-components";


function Contact() {
  return (
    <Form>
      <Heading>Get in touch with me </Heading>
      <FormWrapper>
        <div>
          <form>
            <Input type="text" placeholder="Your Name" required />
            <Input type="text" placeholder="Last Name" />
            <br />
            <Input type="Email" placeholder="Email" required />
            <br />
            <Input type="text" placeholder="Subject of this message" />
            <br />
            <TextArea
              name="message"
              placeholder="Message"
              rows="5"
              required
            ></TextArea>
            <br />
            <Submit>Send Message</Submit>
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
  /* font-family: cooperboldbt; */
  text-underline-position: under;
  color: #fff;
  letter-spacing: 2px;
`;

const FormWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  margin-top: 20px;
`;

const Submit = styled.button`
  width: 40%;
  background: none;
  border-radius: 0.3rem;
  padding: 0.5rem;
  outline: none;
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 2px;
  height: 33px;
  text-align: center;
  cursor: pointer;
  letter-spacing: 2px;
  margin-left: 3%;

  border: 1px solid rgb(190, 190, 190);
  color: rgb(190, 190, 190);
`;



const TextArea = styled.textarea`
  padding: 10px;
  margin: 10px;
  width: 90%;
  background-color: rgba(201, 198, 198, 0.5);
  color: white;
  border: none;
  outline: none;
`;

const Input = styled.input`
  padding: 10px;
  margin: 10px;
  width: 90%;
  background-color: rgba(201, 198, 198, 0.5);
  color: white;
  border: none;
  outline: none;
`;