import { Container, ContentContainer, ImageContainer } from "./card.style"
import { RiCheckDoubleFill } from "react-icons/ri"
import { AiOutlineCheckCircle, AiOutlineDelete } from "react-icons/ai"
import { useGroup } from "../../providers/Group"

const GoalsCard = ({ goal: { title, id, difficulty } }) => {
	const { isAdmin, removeGoal, editGoal } = useGroup()

	return (
		<Container>
			<ImageContainer />

			<ContentContainer>
				<header>
					{isAdmin() && (
						<button className="completed" onClick={() => editGoal(id)}>
							<RiCheckDoubleFill />
						</button>
					)}
					{isAdmin() && (
						<button className="delete" onClick={() => removeGoal(id)}>
							<AiOutlineDelete />
						</button>
					)}
					<button className="achieved">
						<AiOutlineCheckCircle />
					</button>
				</header>

				<h4>{title}</h4>
				<p>{difficulty}</p>
			</ContentContainer>
		</Container>
	)
}

export default GoalsCard
