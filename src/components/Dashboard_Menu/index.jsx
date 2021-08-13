import { Menu, MenuItem, MenuList, Title } from "./dashboard_menu.style"
import { RiHomeLine } from "react-icons/ri"
import { BiGroup } from "react-icons/bi"
import { HiOutlinePencilAlt } from "react-icons/hi"
import { FiLogOut } from "react-icons/fi"
import { useHistory } from "react-router-dom"

const DashboardMenu = () => {
	const path = window.location.pathname
	const history = useHistory()

	const isCurrent = (name) => path.endsWith(name)

	const handleNavigation = (path) => history.push(path)

	const logOut = () => null

	return (
		<Menu>
			<Title>Dashboard</Title>
			<MenuList>
				<MenuItem
					isCurrent={isCurrent("home")}
					onClick={() => handleNavigation("home")}
				>
					<RiHomeLine />
					<p>Home</p>
				</MenuItem>
				<MenuItem
					isCurrent={isCurrent("grupos")}
					onClick={() => handleNavigation("grupos")}
				>
					<BiGroup />
					<p>Grupos</p>
				</MenuItem>
				<MenuItem
					isCurrent={isCurrent("habitos")}
					onClick={() => handleNavigation("habitos")}
				>
					<HiOutlinePencilAlt />
					<p>Hábitos</p>
				</MenuItem>
				<MenuItem isCurrent={false} onClick={logOut}>
					<FiLogOut />
					<p>Sair</p>
				</MenuItem>
			</MenuList>
		</Menu>
	)
}

export default DashboardMenu
