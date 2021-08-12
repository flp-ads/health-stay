import { Container, UsersBottom } from "./card.style"
import { FaHeart } from "react-icons/fa"

const Group_Card = ({ group, isSubscribed = false }) => {
	const { name, category, users_on_group } = group
	let isBig = false
	let users = users_on_group
	// const isSubscribed = users_on_group.find(u => u.id == users_on_group.id)

	const handleUsersList = (users, initial = 0) =>
		users.map(({ username, id }, i) => (
			<UsersBottom key={id} index={i + initial}>
				{username[0]}
			</UsersBottom>
		))

	if (users_on_group.length > 4) {
		isBig = true

		users = users_on_group.slice(0, 4)
	}

	console.log(users_on_group)

	return (
		<Container isSubscribed>
			<div className="groupCard__image_container"></div>
			<div className="groupCard__info_container">
				<div className="inf__text_container">
					<h4>{name}</h4>
					<p>{category}</p>
				</div>
				<div className="info__icon_container">
					<FaHeart />
				</div>
				<div className="info__users">
					{users.length !== 0 ? handleUsersList(users, isBig) : null}
					{isBig ? (
						<UsersBottom key="overflow" index={0} Overflow>{`+${
							users_on_group.length - 4
						}`}</UsersBottom>
					) : null}
				</div>
			</div>
		</Container>
	)
}

export default Group_Card
