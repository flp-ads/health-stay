import {
	Background,
	HabitsCardContainer,
	HabitsCardContent,
	HabitsCardHeaderContainer,
	HabitsCardInfoContainer,
	HabitsCardTitleContainer,
	HabitsCardFooterContainer,
} from "./card.style"

import { FiTrash2, FiCheckCircle } from "react-icons/fi"
import { useHabits } from "../../providers/Habits"

const HabitsCard = ({ habit }) => {

	const { id, title, category, difficulty, frequency, achieved, how_much_achieved } = habit


	return (
		<HabitsCardContainer>
			<Background />
			<HabitsCardContent>
				<HabitsCardHeaderContainer>
					<strong>{frequency}</strong>
					<p>{difficulty}</p>
				</HabitsCardHeaderContainer>
				<HabitsCardTitleContainer>
					<h4>{title}</h4>
				</HabitsCardTitleContainer>
				<HabitsCardInfoContainer>
					<p>{category}</p>
				</HabitsCardInfoContainer>
				<HabitsCardFooterContainer>
					<button>
						<FiTrash2 size={23} color={"var(--red)"} />
					</button>

					<button>
						<FiCheckCircle size={23} />
					</button>
				</HabitsCardFooterContainer>
			</HabitsCardContent>
		</HabitsCardContainer>
	)
}

export default HabitsCard
