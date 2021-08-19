import {
	Background,
	CardActivitiesContainer,
	CardActivitiesContent,
	CardActivitiesInfoContainer,
	CardActivitiesTitleContainer,
} from "./cardAcitivities.style"
import card_light from "../../assets/light_card.svg"
import { FiTrash2 } from "react-icons/fi"
import { useGroup } from "../../providers/Group"

export default function CardActivities({ activity }) {
	const { removeActivity, isAdmin } = useGroup()
	const { title, realization_time } = activity
	const day = realization_time.split("T")[0].split("-").reverse().join("/")
	const time = realization_time.split("T")[1].slice(0, 5)

	return (
		<CardActivitiesContainer>
			<Background>
				<img src={card_light} alt="" />
			</Background>
			<CardActivitiesContent>
				<CardActivitiesTitleContainer>
					<h4>{title}</h4>
					{isAdmin() && (
						<button onClick={() => removeActivity(activity)}>
							<FiTrash2 size={23} />
						</button>
					)}
				</CardActivitiesTitleContainer>
				<CardActivitiesInfoContainer>
					<div>
						<h4>Day</h4>
						<p>{day}</p>
					</div>
					<div>
						<h4>Time</h4>
						<p>{time}</p>
					</div>
				</CardActivitiesInfoContainer>
			</CardActivitiesContent>
		</CardActivitiesContainer>
	)
}
