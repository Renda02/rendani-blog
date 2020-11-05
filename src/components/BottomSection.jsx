import styled from "styled-components";

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
        <div className="projects"></div>
      </Wrapper>
    </MainSection>
  );
}

export default BottomSection;
