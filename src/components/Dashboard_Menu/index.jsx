import { Menu, MenuItem, MenuList, Title } from "./dashboard_menu.style"
import { RiHomeLine } from "react-icons/ri"
import { BiGroup } from "react-icons/bi"
import { HiOutlinePencilAlt } from "react-icons/hi"
import { FiLogOut } from "react-icons/fi"
import { useLogin } from "../../providers/User"

const DashboardMenu = () => {
	const path = window.location.pathname
	const { reset } = useLogin()

	const isCurrent = (name) => path.endsWith(name)
	const logOut = () => {
		reset()
		localStorage.clear()
	}

	return (
		<Menu>
			<Title>Dashboard</Title>
			<MenuList>
				<MenuItem isCurrent={isCurrent("home")} to="/dashboard/home">
					<RiHomeLine />
					<p>Home</p>
				</MenuItem>
				<MenuItem isCurrent={isCurrent("grupos")} to="/dashboard/grupos">
					<BiGroup />
					<p>Grupos</p>
				</MenuItem>
				<MenuItem isCurrent={isCurrent("habitos")} to="/dashboard/habitos">
					<HiOutlinePencilAlt />
					<p>Hábitos</p>
				</MenuItem>
				<MenuItem isCurrent={false} onClick={logOut} to="/">
					<FiLogOut />
					<p>Sair</p>
				</MenuItem>
			</MenuList>
		</Menu>
	)
}

export default DashboardMenu
