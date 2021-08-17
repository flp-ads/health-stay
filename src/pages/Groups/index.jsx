import DashboardMenu from "../../components/Dashboard_Menu";
import { BackgroundImage, Container, Header, User } from "./groups.style";
import bg_image from "../../assets/healthy-food-png.png";
import DashboardGroups from "../../components/Dashboard_Groups";

const Groups = () => {
  return (
    <Container>
      <Header>
        <div className="header_container">
          <h1>Logo</h1>
          <User>U</User>
        </div>
      </Header>
      <div className="inner_container">
        <BackgroundImage>
          <img src={bg_image} alt="" />
        </BackgroundImage>
        <DashboardGroups />
        <DashboardMenu />
      </div>
    </Container>
  );
};

export default Groups;
