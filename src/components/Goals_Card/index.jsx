import { Container, ContentContainer, ImageContainer } from "./card.style"
import { RiCheckDoubleFill } from "react-icons/ri"
import { AiOutlineDelete } from "react-icons/ai"
import { useGroup } from "../../providers/Group"

const GoalsCard = ({ goal, custom, animate, variants, initial }) => {
	const { isAdmin, removeGoal, editGoal } = useGroup()
	const { title, id, difficulty, achieved } = goal

	return (
		<Container
			custom={custom}
			animate={animate}
			variants={variants}
			initial={initial}
		>
			<ImageContainer />

			<ContentContainer achieved={achieved}>
				<header>
					{isAdmin() && (
						<button className="completed" onClick={() => editGoal(goal)}>
							<RiCheckDoubleFill />
						</button>
					)}
					{isAdmin() && (
						<button className="delete" onClick={() => removeGoal(id)}>
							<AiOutlineDelete />
						</button>
					)}
				</header>

				<h4>{title}</h4>
				<p>{difficulty}</p>
			</ContentContainer>
		</Container>
	)
}

export default GoalsCard
