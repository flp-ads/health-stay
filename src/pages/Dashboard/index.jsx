import DashboardMenu from "../../components/Dashboard_Menu"
import { BackgroundImage, Container, Header, User } from "./dashboard.style"
import bg_image from "../../assets/healthy-food-png.png"
import logo from "../../assets/logo_green_bg.svg"
import { useLogin } from "../../providers/User"
import { motion } from "framer-motion"

const Dashboard = ({ children }) => {
	const { userName } = useLogin()

	const HeaderAnimation = {
		visible: {
			opacity: 1,
			transition: {
				duration: 1,
			},
		},
		hidden: {
			opacity: 0,
		},
	}

	const BackgroundImageAnimation = {
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 1,
			},
		},
		hidden: {
			opacity: 0,
			y: -100,
		},
	}

	return (
		<Container>
			<Header>
				<motion.div
					initial="hidden"
					animate="visible"
					variants={HeaderAnimation}
					className="header_container"
				>
					<h1>
						<img src={logo} alt="logo" />
					</h1>
					<User>{userName[0]}</User>
				</motion.div>
			</Header>
			<div className="inner_container">
				<BackgroundImage
					initial="hidden"
					animate="visible"
					variants={BackgroundImageAnimation}
				>
					<img src={bg_image} alt="" />
				</BackgroundImage>
				{children}
				<DashboardMenu />
			</div>
		</Container>
	)
}

export default Dashboard
