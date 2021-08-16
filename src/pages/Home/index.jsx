import Button from "../../components/Global_Button";
import {
  BackgroundHeader,
  BackgroundImage,
  Container,
  Header,
  HomeButtonContainer,
  HomeTitleContainer,
} from "./home.style";
import bg_image from "../../assets/healthy-food-png.png";
import { useHistory } from "react-router";

const Home = () => {
  const history = useHistory();

  const handleNavigation = (path) => {
    return history.push(path);
  };
  return (
    <Container>
      <Header>
        <div className="header_container">
          <h1>Logo</h1>
          <div className="header_container">
            <button onClick={() => handleNavigation("/")}>Home</button>
            <button onClick={() => handleNavigation("/sobre")}>
              Sobre nós
            </button>
          </div>
        </div>
      </Header>
      <BackgroundHeader>
        <img src={bg_image} alt="" />
      </BackgroundHeader>
      <HomeTitleContainer>
        <div>
          <p>Mude seus habitos</p>
          <strong>Hoje</strong>
        </div>
      </HomeTitleContainer>

      <BackgroundImage>
        <img src={bg_image} alt="" />
      </BackgroundImage>

      <HomeButtonContainer>
        <Button onClick={() => handleNavigation("/signup")}>
          Cadastre-se agora
        </Button>

        <div>
          <fieldset>
            <legend>ou</legend>
          </fieldset>
        </div>
        <Button isVanilla onClick={() => handleNavigation("/login")}>
          Faça login
        </Button>
      </HomeButtonContainer>
    </Container>
  );
};

export default Home;
