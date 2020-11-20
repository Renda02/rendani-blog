import avatar from "../../images/profile.JPG";
import { ExternalLink } from "react-external-link";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillMail,
} from "react-icons/ai";
import styled from "styled-components";

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
            <h3>Front End Developer</h3>
          </div>
          <ul className="icons">
            <li>
              <ExternalLink href=" mailto:rluvhengo2@gmail.com">
                <AiFillMail size={30} />
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://www.linkedin.com/in/rendani-luvhengo/">
                <AiFillLinkedin size={30} />
              </ExternalLink>
            </li>
            <li>
              {" "}
              <ExternalLink href="https://github.com/Renda02">
                <AiFillGithub size={30} />
              </ExternalLink>
            </li>
            <li>
              {" "}
              <ExternalLink href="https://twitter.com/rendani18824096/">
                <AiFillTwitterCircle size={30} />
              </ExternalLink>
            </li>
          </ul>
        </LeftContent>
      </AboutLeft>
      <div className="about__right">
        <h2>About Rendani</h2>
        <div className="about__btn">
          {" "}
          <button>Resume</button>
          <button>Contact Me</button>
        </div>
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
      </div>
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
opacity:0;
transition:all 0.5s ease;
}`;

const Heading = styled.h2`
  font-size: 20px;
  margin: 2.2rem 0 0.6rem 0;
  padding-bottom: 1rem;
  border-bottom: 2px solid #fff;
`;