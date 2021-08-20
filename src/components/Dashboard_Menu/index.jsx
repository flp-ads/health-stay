import { Menu, MenuItem, MenuList, Title } from "./dashboard_menu.style"
import { RiHomeLine } from "react-icons/ri"
import { BiGroup } from "react-icons/bi"
import { HiOutlinePencilAlt } from "react-icons/hi"
import { FiLogOut } from "react-icons/fi"
import { useLogin } from "../../providers/User"
import { motion } from "framer-motion"
import { useHabits } from "../../providers/Habits"

const DashboardMenu = () => {
	const path = window.location.pathname
	const { reset } = useLogin()
	const { reset: habitsReset } = useHabits()
	const isMobile = window.screen.width < 768

	const iscurrent = (name) => path.endsWith(name)
	const logOut = () => {
		reset()
		habitsReset()
		localStorage.clear()
	}

	const NavAnimation = {
		visible: {
			opacity: 1,
			x: 0,
			y: 0,
			transition: {
				duration: 0.5,
			},
		},
		hidden: {
			opacity: 0,
			x: isMobile ? 0 : -100,
			y: isMobile ? -100 : 0,
		},
	}

	const MenuListAnimation = {
		visible: {
			opacity: 1,
			transition: {
				when: "beforeChildren",
				staggerChildren: 0.3,
				delay: 0.3,
			},
		},
		hidden: {
			opacity: 0,
			transition: {
				when: "afterChildren",
			},
		},
	}

	const MenuItemAnimation = {
		visible: {
			opacity: 1,
		},
		hidden: {
			opacity: 0,
		},
	}

	return (
		<Menu initial="hidden" animate="visible" variants={NavAnimation}>
			<Title>Dashboard</Title>
			<MenuList initial="hidden" animate="visible" variants={MenuListAnimation}>
				<motion.div className="motion_container" variants={MenuItemAnimation}>
					<MenuItem iscurrent={iscurrent("home")} to="/dashboard/home">
						<RiHomeLine />
						<p>Home</p>
					</MenuItem>
				</motion.div>
				<motion.div className="motion_container" variants={MenuItemAnimation}>
					<MenuItem iscurrent={iscurrent("grupos")} to="/dashboard/grupos">
						<BiGroup />
						<p>Grupos</p>
					</MenuItem>
				</motion.div>
				<motion.div className="motion_container" variants={MenuItemAnimation}>
					<MenuItem iscurrent={iscurrent("habitos")} to="/dashboard/habitos">
						<HiOutlinePencilAlt />
						<p>Hábitos</p>
					</MenuItem>
				</motion.div>
				<motion.div className="motion_container" variants={MenuItemAnimation}>
					<MenuItem onClick={logOut} to="/">
						<FiLogOut />
						<p>Sair</p>
					</MenuItem>
				</motion.div>
			</MenuList>
		</Menu>
	)
}

export default DashboardMenu
