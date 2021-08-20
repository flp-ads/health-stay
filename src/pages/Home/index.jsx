import Button from "../../components/Global_Button"
import {
	BackgroundHeader,
	BackgroundImage,
	Container,
	Header,
	HomeButtonContainer,
	HomeTitleContainer,
} from "./home.style"
import bg_image from "../../assets/healthy-food-png.png"
import { useHistory } from "react-router"
import logo from "../../assets/logo_green_bg.svg"
import { motion } from "framer-motion"

const Home = () => {
	const history = useHistory()

	const handleNavigation = (path) => {
		return history.push(path)
	}

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

	const ImageTopAnimation = {
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 1 },
		},
		hidden: {
			opacity: 0,
			y: -50,
		},
	}

	const ImageLeftAnimation = {
		visible: {
			opacity: 1,
			x: 0,
			transition: { duration: 1 },
		},
		hidden: {
			opacity: 0,
			x: -50,
		},
	}

	const TitleAnimation = {
		visible: {
			opacity: 1,
			transition: {
				when: "beforeChildren",
				duration: 0.5,
				staggerChildren: 0.3,
			},
		},
		hidden: {
			opacity: 0,
			transition: {
				when: "afterChildren",
			},
		},
	}

	const SubtitleAnimation = {
		visible: {
			opacity: 1,
			x: 0,
		},
		hidden: {
			opacity: 0,
			x: -50,
		},
	}

	const ButtonAreaAnimation = {
		visible: {
			opacity: 1,
			transition: {
				when: "beforeChildren",
				duration: 0.5,
				staggerChildren: 0.3,
			},
		},
		hidden: {
			opacity: 0,
			transition: {
				when: "afterChildren",
			},
		},
	}

	const ButtonAnimation = {
		visible: {
			opacity: 1,
			x: 0,
		},
		hidden: {
			opacity: 0,
			x: 50,
		},
	}
	return (
		<>
			<BackgroundHeader
				initial="hidden"
				animate="visible"
				variants={ImageTopAnimation}
			>
				<img src={bg_image} alt="" />
			</BackgroundHeader>
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
						<div className="header_container">
							<button onClick={() => handleNavigation("/sobre")}>
								Sobre nós
							</button>
						</div>
					</motion.div>
				</Header>

				<HomeTitleContainer>
					<motion.div
						initial="hidden"
						animate="visible"
						variants={TitleAnimation}
					>
						<motion.p>Mude seus hábitos</motion.p>
						<motion.strong variants={SubtitleAnimation}>Hoje</motion.strong>
					</motion.div>
				</HomeTitleContainer>

				<BackgroundImage
					initial="hidden"
					animate="visible"
					variants={ImageLeftAnimation}
				>
					<img src={bg_image} alt="" />
				</BackgroundImage>

				<HomeButtonContainer>
					<motion.div
						className="container"
						initial="hidden"
						animate="visible"
						variants={ButtonAreaAnimation}
					>
						<Button
							variants={ButtonAnimation}
							onClick={() => handleNavigation("/signup")}
						>
							Cadastre-se agora
						</Button>

						<motion.div variants={ButtonAnimation}>
							<fieldset>
								<legend>ou</legend>
							</fieldset>
						</motion.div>
						<Button
							variants={ButtonAnimation}
							isVanilla
							onClick={() => handleNavigation("/login")}
						>
							Faça login
						</Button>
					</motion.div>
				</HomeButtonContainer>
			</Container>
		</>
	)
}

export default Home
