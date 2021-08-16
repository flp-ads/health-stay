import GroupsMenu from "../../components/Groups_Menu";
import { BackgroundImage, Container, Header, User } from "./groups.style";
import bg_image from "../../assets/healthy-food-png.png";

const Groups = ({ children }) => {
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
        {children}
        <GroupsMenu />
      </div>
    </Container>
  );
};

export default Groups;
