import { useHistory } from "react-router-dom"
import GroupCard from "../Group_Card"
import HabitsCard from "../Habits_Card"
import {
	All,
	Cards,
	CardsList,
	Container,
	Header,
	MyGroups,
	MyHabits,
	Overview,
	OverviewItem,
	Username,
} from "./dashboard_home.style"
import { useGroups } from "../../providers/Groups"
import { useHabits } from "../../providers/Habits"
import { useLogin } from "../../providers/User"

const DashboardHome = () => {
	const history = useHistory()
	const MAX_CARDS = 3

	const handleNavigation = (path) => history.push(path)

	const { subscribledGroupsCount, myGroups } = useGroups()
	const { habitsCount, unachievedHabits } = useHabits()
	const { userName } = useLogin()

	const ContainerAnimation = {
		hidden: {
			opacity: 0,
			transition: {
				when: "afterChildren",
			},
		},
		visible: {
			opacity: 1,
			transition: {
				when: "beforeChildren",
				staggerChildren: 0.3,
			},
		},
	}

	const DownAnimation = {
		hidden: {
			opacity: 0,
			y: -100,
		},
		visible: {
			opacity: 1,
			y: 0,
		},
	}

	const LeftAnimation = {
		hidden: {
			opacity: 0,
			x: -100,
		},
		visible: {
			opacity: 1,
			x: 0,
		},
	}

	const RightAnimation = {
		hidden: {
			opacity: 0,
			x: 100,
		},
		visible: {
			opacity: 1,
			x: 0,
		},
	}

	const MenuAnimation = {
		hidden: {
			opacity: 0,
			transition: {
				when: "afterChildren",
			},
		},
		visible: {
			opacity: 1,
			transition: {
				when: "beforeChildren",
				delay: 0.8,
				staggerChildren: 0.3,
			},
		},
	}

	const MenuItemAnimation = {
		hidden: {
			opacity: 0,
			y: 50,
		},
		visible: {
			opacity: 1,
			y: 0,
		},
	}

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
		<Container initial="hidden" animate="visible" variants={ContainerAnimation}>
			<Username>
				Olá, <span>{userName}</span>
				<p>Bem vindo</p>
			</Username>
			<Cards>
				<Overview variants={DownAnimation}>
					<Header>Resumo</Header>
					<CardsList
						initial="hidden"
						animate="visible"
						variants={ContainerAnimation}
					>
						<OverviewItem variants={MenuAnimation}>
							Você está inscrito em <p>{subscribledGroupsCount} grupos</p>
						</OverviewItem>
						<OverviewItem variants={MenuItemAnimation}>
							Você tem registrado <p>{habitsCount} habitos</p>
						</OverviewItem>
					</CardsList>
				</Overview>
				<MyGroups variants={LeftAnimation}>
					<Header>
						Meus <span>Grupos</span>
					</Header>
					<CardsList
						initial="hidden"
						animate="visible"
						variants={CardsContainerAnimation}
					>
						{myGroups.slice(0, MAX_CARDS).map((group, i) => (
							<GroupCard
								custom={i}
								animate="visible"
								initial="hidden"
								variants={CardsAnimation}
								isSubscribed
								key={group.id}
								group={group}
							/>
						))}
					</CardsList>
					{myGroups.length > MAX_CARDS && (
						<All onClick={() => handleNavigation("grupos")}>
							Ver <span>todos</span>
						</All>
					)}
				</MyGroups>
				<MyHabits variants={RightAnimation}>
					<Header>
						Meus <span>Hábitos</span>
					</Header>
					<CardsList
						initial="hidden"
						animate="visible"
						variants={CardsContainerAnimation}
					>
						{unachievedHabits.slice(0, MAX_CARDS).map((habit, i) => (
							<HabitsCard
								custom={i}
								animate="visible"
								initial="hidden"
								variants={CardsAnimation}
								key={habit.id}
								habit={habit}
							/>
						))}
					</CardsList>
					{unachievedHabits.length > MAX_CARDS && (
						<All onClick={() => handleNavigation("habitos")}>
							Ver <span>todos</span>
						</All>
					)}
				</MyHabits>
			</Cards>
		</Container>
	)
}

export default DashboardHome
