import styled from "styled-components";
import { ExternalLink } from "react-external-link";
import avatar from "../images/html.jpg";


const MainSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 40px;
  z-index: 1;
  color: #000000;
`;

const Wrapper = styled.div`
  max-width: 1080px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 20px;
  font-weight: 500;
  color: #000000;
  padding-top: 40px;
  padding-bottom: 40px;
  width: 100%;
  font-family: "cooperboldbt", serif;
`;

const Heading = styled.div`
  max-width: 1080px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 20px;
  font-weight: 500;
  color: #000000;
  padding-top: 40px;
  padding-bottom: 40px;
  width: 100%;
  font-family: "cooperboldbt", serif; ;
`;

const Project = styled.div`
  max-width: 1080px;
  display: flex;
  justify-content: space-between;
  padding: 2px 16px;
`;

const CardHeading = styled.h4`
  font-size: 20px;
  text-align: center;
`;

const DemoLink = styled.div`
padding:3px;
border:none;
display:flex;
justify-content:space-between`;




function BottomSection() {
  return (
    <MainSection>
      <Wrapper>
        <Heading>
          <h2>My most recent adventures</h2>
          <h3>
            Get to know projects I've worked with and what technologies I've
            used.{" "}
          </h3>
        </Heading>
        <Project>
          <div className="card__a">
            <img src={avatar} alt="project 1" className="card-img" />
            <CardHeading>Project 1</CardHeading>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
              architecto natus ipsa dignissimos porro rem neque, repudiandae
              libero sapiente iste perferendis quidem quae numquam ducimus
              pariatur voluptatem ex! A, laboriosam!
            </p>
            <DemoLink>
              <ExternalLink href="https://github.com/Renda02/Vanilla-Weather-App">
                <button size="small" color="primary">
                  Source Code{" "}
                </button>
              </ExternalLink>
              <ExternalLink href="https://thirsty-albattani-e7ad76.netlify.app/">
                <button size="small" color="primary">
                  Live Demo
                </button>
              </ExternalLink>
            </DemoLink>
          </div>
          <div className="card__b">
            <img src={avatar} alt="project 1" className="card-img" />
            <CardHeading>Project 1</CardHeading>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
              architecto natus ipsa dignissimos porro rem neque, repudiandae
              libero sapiente iste perferendis quidem quae numquam ducimus
              pariatur voluptatem ex! A, laboriosam!
            </p>
            <DemoLink>
              <ExternalLink href="https://github.com/Renda02/Vanilla-Weather-App">
                <button size="small" color="primary">
                  Source Code{" "}
                </button>
              </ExternalLink>
              <ExternalLink href="https://thirsty-albattani-e7ad76.netlify.app/">
                <button size="small" color="primary">
                  Live Demo
                </button>
              </ExternalLink>
            </DemoLink>
          </div>
          <div className="card__b">
            <img src={avatar} alt="project 1" className="card-img" />
            <CardHeading>Project 1</CardHeading>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
              architecto natus ipsa dignissimos porro rem neque, repudiandae
              libero sapiente iste perferendis quidem quae numquam ducimus
              pariatur voluptatem ex! A, laboriosam!
            </p>
            <DemoLink>
              <ExternalLink href="https://github.com/Renda02/Vanilla-Weather-App">
                <button size="small" color="primary">
                  Source Code{" "}
                </button>
              </ExternalLink>
              <ExternalLink href="https://thirsty-albattani-e7ad76.netlify.app/">
                <button size="small" color="primary">
                  Live Demo
                </button>
              </ExternalLink>
            </DemoLink>
          </div>
        </Project>
      </Wrapper>
    </MainSection>
  );
}

export default BottomSection;
