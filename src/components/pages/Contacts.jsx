import styled from "styled-components";
import "../../App.css";
import Footer from "../../components/Footer"



function Contacts() {
  return (<>
    <Container >
      <Wrapper>
        <Text>Contact Me</Text>
        <Form action="#">
          <FormRow>
            <InputData>
              <input type="text" />
              <InputLabel>First Name</InputLabel>
            </InputData>
            <InputData>
              <input type="text" />
              <InputLabel>Last Name</InputLabel>
            </InputData>
          </FormRow>
          <FormRow>
            <InputData>
              <input type="text" />
              <InputLabel>Email Adress</InputLabel>
            </InputData>
            <InputData>
              <input type="text" />
              <InputLabel>Contact Detail</InputLabel>
            </InputData>
          </FormRow>
          <TextRow>
            <div className="input__data ">
              <textarea cols="30" rows="10"></textarea>
              <InputLabel>Write your message</InputLabel>
            </div>
          </TextRow>
          <div className="form__row submit">
            <div className="input__data ">
              <div className="inner"></div>
              <input type="submit" value="Submit" />
            </div>
          </div>
        </Form>
      </Wrapper>
      
    </Container >
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
background:#fff;
max-width:800px;
width:800px;
box-shadow:0px 0px 10px rgba(0,0,0,0.5);
padding:25px 40px 10px 40px;
margin:50px;

`;

const Text = styled.div`
font-size:35px;
font-weight:600;
text-align:center;
color:pink;

`;

const Form = styled.form`
padding:30px 0 0 0;

`;

const FormRow = styled.div`
display:flex;
margin:32px 0;`;

const InputData = styled.div`
width:100%;
height:40px;
margin:0 20px;
position:relative;
`;

const TextRow = styled.textarea`
height:70px`;

const InputLabel = styled.label`
position:absolute;
bottom:10px;
font-size:16px;
pointer-events:none;

`;