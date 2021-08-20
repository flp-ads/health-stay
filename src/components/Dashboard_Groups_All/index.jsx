import { CardsList, All } from "./groups_all.style"
import GroupCard from "../Group_Card"
import { useGroups } from "../../providers/Groups"

const DashboardGroupsAll = () => {
	const { groups, nextPage, loadMoreGroups } = useGroups()

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
		<div>
			<CardsList
				initial="hidden"
				animate="visible"
				variants={CardsContainerAnimation}
			>
				{groups.map((group, i) => (
					<GroupCard
						custom={i}
						animate="visible"
						initial="hidden"
						variants={CardsAnimation}
						key={group.id}
						group={group}
					/>
				))}
			</CardsList>
			{nextPage && <All onClick={loadMoreGroups}>Mais</All>}
		</div>
	)
}

export default DashboardGroupsAll
