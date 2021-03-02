import React from "react";

import styled from "styled-components";
import { Button, Heading } from "./styled";

function Project(props) {
  return (
    <StyledContainer>
      <div>
        <Image src={props.image} alt="weather" />
      </div>
      <HeadingWrap>
        <Heading>{props.title}</Heading>
      </HeadingWrap>
      <div>
        <Description>{props.description}</Description>

        <Text>
          <strong>Features:</strong>
        </Text>
        <hr />
        <TextLinks>
          <li>{props.tech}</li>
        </TextLinks>
      </div>
      <ButtonContainer>
        <Button>Live Demo</Button>
        <Button>Source Code</Button>
      </ButtonContainer>
    </StyledContainer>
  );
}

export default Project;

const StyledContainer = styled.div`
  border: 1px solid #000;
  padding: 25px 12px 18px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const HeadingWrap = styled.div`
  margin: 6px 0;
`;

const Description = styled.p`
  padding-top: 8px;
  font-weight: 300;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 1.2rem 0;

  @media screen and (max-width: 760px) {
    flex-direction: column;
  }
`;

const Text = styled.h4`
  font-size: 1rem;
  font-weight: 500;
  padding: 1rem 0;
`;

const TextLinks = styled.ul`
  padding: 0.8rem;
`;

const Image = styled.img`
  max-width: 300px;
  object-fit: cover;
`;
