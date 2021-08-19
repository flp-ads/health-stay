import { CardsList } from "./goals.style"
import GoalsCard from "../Goals_Card"
import { useGroup } from "../../providers/Group"

const DashboardGoalsOnGoing = () => {
	const { goals } = useGroup()

	return (
		<div>
			<CardsList>
				{goals
					.filter((goal) => !goal.achieved)
					.map((goal) => (
						<GoalsCard key={goal.id} goal={goal} />
					))}
			</CardsList>
		</div>
	)
}

export default DashboardGoalsOnGoing
