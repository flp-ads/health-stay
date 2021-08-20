import {
  BackgroundHeader,
  BackgroundImage,
  Container,
  Header,
  HomeButtonContainer,
  HomeTitleContainer,
} from "./about.style";
import bg_image from "../../assets/healthy-food-png.png";
import { useHistory } from "react-router";
import Rafael from "../../assets/Rafael.jpeg";
import Felipe from "../../assets/Felipe.jpeg";
import Eduardo from "../../assets/Eduardo.jpeg";
import Lucas from "../../assets/Lucas.jpeg";
import Fernando from "../../assets/Fernando.jpeg";
import { FaLinkedin } from "react-icons/fa";
import logo from "../../assets/logo_green_bg.svg";

const AboutUs = () => {
  const history = useHistory();

  const handleNavigation = (path) => {
    return history.push(path);
  };
  return (
    <>
      <BackgroundHeader>
        <img src={bg_image} alt="" />
      </BackgroundHeader>
      <Container>
        <Header>
          <div className="header_container">
            <h1>
              <img src={logo} alt="logo" />
            </h1>
            <div className="header_container">
              <button onClick={() => handleNavigation("/")}>Home</button>
            </div>
          </div>
        </Header>

        <HomeTitleContainer>
          <div>
            <p>Equipe de</p>
            <strong>Desenvolvimento</strong>
          </div>
        </HomeTitleContainer>

        <BackgroundImage>
          <img src={bg_image} alt="" />
        </BackgroundImage>

        <HomeButtonContainer>
          <section>
            <img src={Eduardo} alt="RafaPhoto" />
            <div>
              <h3>Eduardo Parraga</h3>
              <p>Tech Lead / Developer</p>
              <a href="https://www.linkedin.com/in/eduardo-parraga-2b0a72185/">
                <FaLinkedin size={28} />
              </a>
            </div>
          </section>
          <section>
            <img src={Felipe} alt="RafaPhoto" />
            <div>
              <h3>Felipe Silva </h3>
              <p>QA / Developer</p>
              <a href="https://www.linkedin.com/in/felipe-silva-3855541a4">
                <FaLinkedin size={28} />
              </a>
            </div>
          </section>
          <section>
            <img src={Fernando} alt="RafaPhoto" />
            <div>
              <h3>Fernando Feliciano </h3>
              <p>QA / Developer</p>
              <a href="https://www.linkedin.com/in/fernando-rodrigo-83773b21a/">
                <FaLinkedin size={28} />
              </a>
            </div>
          </section>
          <section>
            <img src={Lucas} alt="LucasPhoto" />
            <div>
              <h3>Lucas Rozado</h3>
              <p>Product Owner / Developer</p>
              <a href="https://www.linkedin.com/in/lucas-bravo-rozado-a80b36213/">
                <FaLinkedin size={28} />
              </a>
            </div>
          </section>
          <section>
            <img src={Rafael} alt="RafaPhoto" />
            <div>
              <h3>Rafael Bertoldo</h3>
              <p>Scrum Master / Developer</p>
              <a href="https://www.linkedin.com/in/felipe-silva-3855541a4">
                <FaLinkedin size={28} />
              </a>
            </div>
          </section>
        </HomeButtonContainer>
      </Container>
    </>
  );
};

export default AboutUs;
