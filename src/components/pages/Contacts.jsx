import styled from "styled-components";
import Footer from "../../components/Footer";
import {Button} from "../../components/styled"
import "../../App.css"


function Contacts() {
  return (
    <>
      <Container>
        <Wrapper>
          <Text>Contact Me</Text>
          
            <Form>
              <Row>
                <Input type="text" placeholder="Your Name" required />
                <Input type="text" placeholder="Last Name" />
              </Row>
              <Row>
                <Inputt
                  type="Email"
                  placeholder="rluvhengo2@gmail.com"
                  required
                />
              </Row>
              <Row>
                <TextArea
                  name="message"
                  placeholder="Write your message here"
                  rows="5"
                  required
                ></TextArea>
              </Row>
              <Button>Send Message</Button>
            </Form>
         
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
}

export default Contacts;

const Container = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1080px;
  margin-right: auto;
  margin-left: auto;
  width: 100%;
`;

const Wrapper = styled.div`
  background: #f4f3f5;
  max-width: 1080px;
  width: 1080px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  padding: 25px 40px 10px 40px;
  margin: 50px;
  border-radius:6px;
`;

const Form = styled.form`
    padding: 30px 0 ;

`;


const TextArea = styled.textarea`
  display: flex;
  width: 100%;
  height: 100%;
  border: none;
  font-size: 17px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.12);
  margin: 0.5rem;
  border-radius: 6px;
  padding:1rem;
  ::placeholder {
    color: #000;
    font-size: 20px;
    font-family: Questrial, Helvetica, Arial, Lucida, sans-serif;
  }
`;

const Input = styled.input`
  display: flex;
  width: 100%;
  height: 100%;
  border: none;
  margin: 0.5rem;
  font-size: 17px;
  padding: 1rem;
  border-radius: 6px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.12);
  ::placeholder {
    color: #000;
    font-size: 20px;
    font-family: Questrial, Helvetica, Arial, Lucida, sans-serif;
  }
`;

const Inputt = styled.input`
  padding: 1rem;

  width: 100%;
  border-radius: 6px;
  color: #000;
  border: none;
  outline: none;
  margin: 0.5rem;
  ::placeholder {
    color: #000;
    font-size: 20px;
    font-family: Questrial, Helvetica, Arial, Lucida, sans-serif;
  }
`;


const Row = styled.div`
  display: flex;
  padding: 0.5rem 0;
`;

const Text = styled.div`
  font-size: 35px;
  font-weight: 600;
  text-align: center;
  color: pink;
`;
