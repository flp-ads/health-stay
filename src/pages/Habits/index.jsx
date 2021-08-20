import { Container } from "./habits.styles"
import DashboardHabits from "../../components/Dashboard_Habits"

const Habits = () => {
	return (
		<Container>
			<div className="inner_container">
				<DashboardHabits />
			</div>
		</Container>
	)
}

export default Habits
