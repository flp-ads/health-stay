import DashboardMenu from "../../components/Dashboard_Menu"
import { BackgroundImage, Container, Header, User } from "./dashboard.style"
import bg_image from "../../assets/healthy-food-png.png"
import logo from "../../assets/logo_green_bg.svg"
import { useLogin } from "../../providers/User"

const Dashboard = ({ children }) => {
	const { userName } = useLogin()

	return (
		<Container>
			<Header>
				<div className="header_container">
					<h1>
						<img src={logo} alt="logo" />
					</h1>
					<User>{userName[0]}</User>
				</div>
			</Header>
			<div className="inner_container">
				<BackgroundImage>
					<img src={bg_image} alt="" />
				</BackgroundImage>
				{children}
				<DashboardMenu />
			</div>
		</Container>
	)
}

export default Dashboard
