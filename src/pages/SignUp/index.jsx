import Input from "../../components/Global_Input"
import Button from "../../components/Global_Button"

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import { useHistory } from "react-router"

import {
	Container,
	Background,
	Content,
	HeaderContainer,
	MainContainer,
} from "./signup.styles"

import { FiLock, FiUser, FiChevronLeft, FiMail } from "react-icons/fi"
import { motion } from "framer-motion"
import api from "../../services/api"
import { toast } from "react-toastify"

import logo from "../../assets/logo_white_bg.svg"

const SignUp = () => {
	const formSchema = yup.object().shape({
		username: yup.string().required("Preencha este campo"),
		email: yup.string().required("Preencha este campo").email("Email inválido"),
		password: yup
			.string()
			.required("Preencha este campo")
			.min(6, "Senha deve ter 6 caracteres"),
		pwdConfirm: yup
			.string()
			.required("Preencha este campo")
			.oneOf([yup.ref("password"), null], "Senhas devem ser iguais"),
	})

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(formSchema),
	})

	const onFormSubmit = ({ username, email, password }) => {
		api
			.post("/users/", {
				username,
				email,
				password,
			})
			.then((_) => {
				toast.success("Conta criada com sucesso!")
				handleNavigation("/login")
			})
			.catch((_) => toast.error("Ops... Algo deu errado"))
	}

	const history = useHistory()

	const handleNavigation = (path) => history.push(path)

	const ContainerAnimation = {
		visible: {
			opacity: 1,
		},
		hidden: {
			opacity: 0,
		},
	}

	const SideContainerAnimation = {
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 1,
			},
		},
		hidden: {
			opacity: 0,
			x: "-50%",
		},
	}

	const LogoAnimation = {
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.5,
			},
		},
		hidden: {
			opacity: 0,
			x: 50,
		},
	}

	const GoBackAnimation = {
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 1,
			},
		},
		hidden: {
			opacity: 0,
			y: -50,
		},
	}

	const FormAnimation = {
		visible: {
			opacity: 1,
			transition: {
				when: "beforeChildren",
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

	const FormItemAnimation = {
		visible: {
			opacity: 1,
			y: 0,
		},
		hidden: {
			opacity: 0,
			y: -50,
		},
	}

	return (
		<Container initial="hidden" animate="visible" variants={ContainerAnimation}>
			<Background variants={SideContainerAnimation}>
				<h1 className="title_bold">Crie sua</h1>
				<h1>conta</h1>
			</Background>

			<MainContainer>
				<HeaderContainer>
					<motion.button
						initial="hidden"
						animate="visible"
						variants={GoBackAnimation}
						onClick={() => handleNavigation("/")}
					>
						<FiChevronLeft /> voltar
					</motion.button>

					<motion.h1
						initial="hidden"
						animate="visible"
						variants={LogoAnimation}
						className="logo"
					>
						<img src={logo} alt="logo" />
					</motion.h1>
				</HeaderContainer>

				<Content>
					<motion.form
						initial="hidden"
						animate="visible"
						variants={FormAnimation}
						id="signup_form"
						onSubmit={handleSubmit(onFormSubmit)}
					>
						<Input
							variants={FormItemAnimation}
							name="username"
							icon={FiUser}
							placeholder="Usuário"
							register={register}
							error={errors.username?.message}
						/>

						<Input
							variants={FormItemAnimation}
							name="email"
							icon={FiMail}
							placeholder="Email"
							register={register}
							error={errors.email?.message}
						/>

						<Input
							variants={FormItemAnimation}
							name="password"
							type="password"
							icon={FiLock}
							placeholder="Senha"
							register={register}
							error={errors.password?.message}
						/>

						<Input
							variants={FormItemAnimation}
							name="pwdConfirm"
							type="password"
							icon={FiLock}
							placeholder="Confirmar senha"
							register={register}
							error={errors.pwdConfirm?.message}
						/>
					</motion.form>

					<Button
						variants={{
							visible: {
								opacity: 1,
								transition: {
									delay: 1.5,
								},
							},
							hidden: {
								opacity: 0,
							},
						}}
						type="submit"
						form="signup_form"
					>
						cadastro
					</Button>

					<motion.div
						variants={{
							visible: {
								opacity: 1,
								transition: {
									delay: 1.8,
								},
							},
							hidden: {
								opacity: 0,
							},
						}}
						className="separator"
					>
						<hr />
						<p>ou</p>
						<hr />
					</motion.div>

					<Button
						variants={{
							visible: {
								opacity: 1,
								transition: {
									delay: 2.1,
								},
							},
							hidden: {
								opacity: 0,
							},
						}}
						isVanilla
						onClick={() => handleNavigation("/login")}
					>
						login
					</Button>
				</Content>
			</MainContainer>
		</Container>
	)
}

export default SignUp
