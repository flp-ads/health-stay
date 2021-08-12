import { Container } from "./card.style"

const Group_Card = ({ group, isSubscribed = false }) => {
	const { name, category, users_on_group } = group
	// const isSubscribed = users_on_group.find(u => u.id == users_on_group.id)

	return (
		<Container isSubscribed>
			<div className="groupCard__image_container"></div>
			<div className="groupCard__info_container">
				<h4>{name}</h4>
				<p>{category}</p>
			</div>
		</Container>
	)
}

export default Group_Card
