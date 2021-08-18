import {
	CardImage,
	Container,
	Icon,
	Info,
	Text,
	Users,
	UsersBottom,
} from "./card.style"
import { FaHeart } from "react-icons/fa"
import { useGroups } from "../../providers/Groups"

const GroupCard = ({ group, isSubscribed = false }) => {
	const { name, category, users_on_group } = group
	const { subscribleToGroup } = useGroups()

	const handleUsers = () => {
		let isBig = false
		let users = users_on_group

		const createList = (users, initial = 0) =>
			users.map(({ username, id }, i) => (
				<UsersBottom key={id} index={i + initial}>
					{username[0]}
				</UsersBottom>
			))

		if (users_on_group.length > 4) {
			isBig = true

			users = users_on_group.slice(0, 4)
		}

		return (
			<>
				{users.length && createList(users, isBig)}
				{isBig && (
					<UsersBottom key="overflow" index={0} Overflow>{`+${
						users_on_group.length - 4
					}`}</UsersBottom>
				)}
			</>
		)
	}

	return (
		<Container>
			<CardImage />
			<Info>
				<Text>
					<h4>{name}</h4>
					<p>{category}</p>
				</Text>
				<Icon
					isSubscribed={isSubscribed}
					onClick={() => (!isSubscribed ? subscribleToGroup(group) : null)}
				>
					<FaHeart />
				</Icon>
				<Users>{handleUsers()}</Users>
			</Info>
		</Container>
	)
}

export default GroupCard
