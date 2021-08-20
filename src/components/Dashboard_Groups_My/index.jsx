import { CardsList } from "./groups_my.style"
import GroupCard from "../Group_Card"
import { useGroups } from "../../providers/Groups"

const DashboardGroupsMy = () => {
	const { myGroups } = useGroups()

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
		<CardsList
			initial="hidden"
			animate="visible"
			variants={CardsContainerAnimation}
		>
			{myGroups.map((group, i) => (
				<GroupCard
					custom={i}
					animate="visible"
					initial="hidden"
					variants={CardsAnimation}
					key={group.id}
					group={group}
					isSubscribed
				/>
			))}
		</CardsList>
	)
}

export default DashboardGroupsMy
