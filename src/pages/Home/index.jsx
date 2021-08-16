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
        <h1>Logo</h1>
      </Header>
      <BackgroundHeader>
        <img src={bg_image} alt="" />
      </BackgroundHeader>
      <HomeTitleContainer>
        <div>
          <p>change yours habits</p>
          <strong>Today</strong>
        </div>
      </HomeTitleContainer>

      <BackgroundImage>
        <img src={bg_image} alt="" />
      </BackgroundImage>

      <HomeButtonContainer>
        <Button onClick={() => handleNavigation("/signup")}>sign up now</Button>

        <div>
          <fieldset>
            <legend>or</legend>
          </fieldset>
        </div>
        <Button isVanilla onClick={() => handleNavigation("/login")}>
          Login rigth away
        </Button>
      </HomeButtonContainer>
    </Container>
  );
};

export default Home;
