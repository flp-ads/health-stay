import DashboardMenu from "../../components/Dashboard_Menu";
import { BackgroundImage, Container, Header, User } from "./habits.styles";
import bg_image from "../../assets/healthy-food-png.png";
import DashboardHabits from "../../components/Dashboard_Habits";

const Habits = () => {
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
        <DashboardHabits />
        <DashboardMenu />
      </div>
    </Container>
  );
};

export default Habits;
