import { CardsList } from "./goals.style"
import GoalsCard from "../Goals_Card"
import { useGroup } from "../../providers/Group"

const DashboardGoalsOnGoing = () => {
	const { goals } = useGroup()

	const CardsContainerAnimation = {
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

	const CardsAnimation = {
		visible: (i) => ({
			opacity: 1,
			x: 0,
			transition: {
				delay: i * 0.3,
			},
		}),
		hidden: { opacity: 0, x: -50 },
	}

	return (
		<CardsList
			initial="hidden"
			animate="visible"
			variants={CardsContainerAnimation}
		>
			{goals
				.filter((goal) => !goal.achieved)
				.map((goal, i) => (
					<GoalsCard
						custom={i}
						animate="visible"
						initial="hidden"
						variants={CardsAnimation}
						key={goal.id}
						goal={goal}
					/>
				))}
		</CardsList>
	)
}

export default DashboardGoalsOnGoing
