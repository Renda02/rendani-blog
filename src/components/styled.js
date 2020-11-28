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
`;

export const Heading = styled.h2`
  color: #060930;
 
  font-weight: 800;
  line-height:1.4;
  font-size:2rem;
`;

export const SubHeading = styled.h3`
  
  line-height: 1.28;
  color: #6c7085;
  font-weight: 450;
  text-align: center;
  
  font-size:1.3rem;
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
