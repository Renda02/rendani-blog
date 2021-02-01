import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1080px;
  margin-right: auto;
  margin-left: auto;
  width: 100%;
`;

export const Button = styled.button`
  cursor: pointer;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  color: #fff;
  border: 1px solid #ee5f5f;
  background-color: #ee5f5f;
  box-shadow: 0 0.05em 0.1em rgba(0, 0, 0, 0.25);

  :hover {
    transition: 0.5s;
    background-color: #fff;
    color: #ee5f5f;
    text-decoration: none;
  }

  @media screen and (max-width:720px){
    margin:.3rem 0;
  }
`;

export const Heading = styled.h2`
  color: #060930;
  font-weight: 800;
  line-height: 1.4;
  font-size: 2rem;

  @media screen and (max-width:760px){
    padding: 0 .8rem;
  }
`;

export const SubHeading = styled.p`
  line-height: 1.2;
  color: #6c7085;
  font-weight: 300;
  text-align: center;

  font-size: 1.2rem;
  @media screen and (max-width:760px){
    padding: 0 .8rem;
    text-align: center;
  }
`;

export const BodyHeading = styled.div`
  max-width: 1080px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 2rem 0;
`;
