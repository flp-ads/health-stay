import DashboardMenu from "../../components/Dashboard_Menu"
import { Container } from "./groups.style"
import DashboardGroups from "../../components/Dashboard_Groups"

const Groups = () => {
	return (
		<Container>
			<div className="inner_container">
				<DashboardGroups />
				<DashboardMenu />
			</div>
		</Container>
	)
}

export default Groups
