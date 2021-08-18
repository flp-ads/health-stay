import bg_image from "../../assets/healthy-food-png.png";
import DashboardGroup from "../../components/Dashboard_Group";
import DashboardMenu from "../../components/Dashboard_Menu";
import { BackgroundImage, Container, Header, User } from "./group.style";

const Group = () => {
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
        <DashboardGroup />
        <DashboardMenu />
      </div>
    </Container>
  );
};

export default Group;
