import avatar from "../../images/profile.JPG";
import { ExternalLink } from "react-external-link";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillMail,
} from "react-icons/ai";
import styled from "styled-components";
import {Button} from "../../components/styled"

function About() {
  return (
    <AboutWrapper>
      <AboutLeft>
        <LeftContent>
          <div>
            <Shadow>
              <ImageBox>
                <Image src={avatar} alt="about" />
              </ImageBox>
            </Shadow>
            <Heading>Rendani</Heading>
            <Title>Front End Developer</Title>
          </div>
          <Icons>
            <IconsLi>
              <ExternalLink href=" mailto:rluvhengo2@gmail.com">
                <AiFillMail size={25} fill="#fff" />
              </ExternalLink>
            </IconsLi>
            <IconsLi>
              <ExternalLink href="https://www.linkedin.com/in/rendani-luvhengo/">
                <AiFillLinkedin size={25} fill="#fff" />
              </ExternalLink>
            </IconsLi>
            <IconsLi>
              {" "}
              <ExternalLink href="https://github.com/Renda02">
                <AiFillGithub size={25} fill="#fff" />
              </ExternalLink>
            </IconsLi>
            <IconsLi>
              {" "}
              <ExternalLink href="https://twitter.com/rendani18824096/">
                <AiFillTwitterCircle size={25} fill="#fff" />
              </ExternalLink>
            </IconsLi>
          </Icons>
        </LeftContent>
      </AboutLeft>
      <AboutRight>
        <Heading1>About Rendani</Heading1>
        <ButtonBox>
          {" "}
          <Button>Resume</Button>
          <Button>Contact Me</Button>
        </ButtonBox>
        <div className="para">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In totam
            inventore error aperiam molestias harum quibusdam ipsa odit, rerum
            qui magnam, neque beatae sapiente enim pariatur! Possimus maiores
            reiciendis accusantium!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            accusamus nesciunt ullam, quaerat sint nisi asperiores explicabo
            exercitationem repellendus quos dignissimos error odit. Nisi
            possimus, fuga veritatis modi exercitationem fugit!
          </p>
        </div>
      </AboutRight>
    </AboutWrapper>
  );
}

export default About;

const AboutWrapper = styled.div`
  height: 100vh;
`;

const AboutLeft = styled.div`
  background: #f590b4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const LeftContent = styled.div`
  background: #f49cbb;
  padding: 4rem 4rem 2.5rem 5rem;
  text-align: center;
`;

const Image = styled.img`
  display: block;
  width: 200px;
`;

const ImageBox = styled.div`
  width: 200px;
  height: 200px;
  overflow: hidden;
  border-radius: 50%;
  transition: all 0.5s ease-in-out;
`;

const Shadow = styled.div`
margin-left:auto;
margin-right:auto;
border-radius:50%;
width:200px;
height:200px;
position:relative;
cursor:pointer;
::after{
  content:"";
  position:absolute;
  background: rgba(0,0,0,0.5);
  left:50%;
  transform:translated(50%);
  bottom:-20px;
  width:50px;
height:7px;
filter:blur(3px);
-webkit-filter:blur(3px);
opacity:0;
transition:all 0.5s ease;
}`;

const Heading = styled.h2`
  font-size: 20px;
  margin: 2.2rem 0 0.6rem 0;
  padding-bottom: 1rem;
  border-bottom: 2px solid #fff;
`;

const Title = styled.h3`
  text-transform: uppercase;
  font-weight: 300;
  letter-spacing:5px;
  margin-top:1.2rem;
`;

const Icons = styled.ul`
background:#fff;
display:flex;
justify-content:center;
padding:0.8rem 0;`;

const IconsLi = styled.li`
background:#f36a8d;
color:#fff;
width:40px;
margin: 0 0.5rem;
border-radius:50%;
display:flex;
justify-content:center;
align-items:center;
font-size:1.2rem;
cursor: pointer;
transition:all 0.5s ease-in-out;
:hover{
  background:#000;
  color:#fff;
}
`;

const AboutRight = styled.div`
background:#fff;
height:100vh;
display:flex;
align-items:center;
flex-direction:column;
justify-content:center;
padding: 0 5rem;
text-align:center;`;

const Heading1 = styled.h2`
text-align:center;
font-weight:600;`;

const ButtonBox = styled.div`
display:flex;
margin:2rem 0;
`;

