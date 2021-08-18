import { CardsList } from "./groups_my.style"
import GroupCard from "../Group_Card"
import { useGroups } from "../../providers/Groups"

const DashboardGroupsMy = () => {
	const { myGroups } = useGroups()

	return (
		<div>
			<CardsList>
				{myGroups.map((group) => (
					<GroupCard key={group.id} group={group} isSubscribed />
				))}
			</CardsList>
		</div>
	)
}

export default DashboardGroupsMy
