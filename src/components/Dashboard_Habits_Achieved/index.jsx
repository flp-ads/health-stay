import HabitsCard from "../Habits_Card"
import { CardsList } from "./achieved.habits.style"
import { useHabits } from "../../providers/Habits"

const AchievedHabits = () => {
	const { achievedHabits } = useHabits()

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
			{achievedHabits.map((habit, i) => (
				<HabitsCard
					custom={i}
					animate="visible"
					initial="hidden"
					variants={CardsAnimation}
					key={habit.id}
					habit={habit}
				/>
			))}
		</CardsList>
	)
}

export default AchievedHabits
