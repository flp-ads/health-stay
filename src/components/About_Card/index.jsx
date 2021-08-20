import {
  Background,
  AboutUsContainer,
  AboutUsContent,
  AboutUsHeaderContainer,
  AboutUsInfoContainer,
  AboutUsTitleContainer,
} from "./about.style";

// import {  } from "react-icons/fi";

const AboutUsCard = () => {
  return (
    <AboutUsContainer>
      <Background />
      <AboutUsContent>
        <AboutUsHeaderContainer>
          <strong>Name</strong>
          <p>name</p>
        </AboutUsHeaderContainer>
        <AboutUsTitleContainer>
          <h4>texto</h4>
        </AboutUsTitleContainer>
        <AboutUsInfoContainer>
          <p>texto</p>
        </AboutUsInfoContainer>
      </AboutUsContent>
    </AboutUsContainer>
  );
};

export default AboutUsCard;
