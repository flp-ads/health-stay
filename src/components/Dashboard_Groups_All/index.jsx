import { CardsList, All } from "./groups_all.style"
import GroupCard from "../Group_Card"
import { useGroups } from "../../providers/Groups"

const DashboardGroupsAll = () => {
	const { groups, nextPage, loadMoreGroups } = useGroups()

	return (
		<div>
			<CardsList>
				{groups.map((group) => (
					<GroupCard key={group.id} group={group} />
				))}
			</CardsList>
			{nextPage && <All onClick={loadMoreGroups}>Mais</All>}
		</div>
	)
}

export default DashboardGroupsAll
