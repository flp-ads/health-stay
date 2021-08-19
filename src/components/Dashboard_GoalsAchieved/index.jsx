import { CardsList } from "./goals.style"
import GoalsCard from "../Goals_Card"
import { useGroup } from "../../providers/Group"

const DashboardGoalsAchieved = () => {
	const { goals } = useGroup()
	return (
		<div>
			<CardsList>
				{goals
					.filter((goal) => goal.achieved === true)
					.map((goal) => (
						<GoalsCard key={goal.id} goal={goal} />
					))}
			</CardsList>
		</div>
	)
}

export default DashboardGoalsAchieved
