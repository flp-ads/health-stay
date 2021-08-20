import ActivitiesCard from "../Activities_Card"
import DashboardGoalsAchieved from "../Dashboard_GoalsAchieved"
import DashboardGoalsCompleted from "../Dashboard_GoalsCompleted"
import DashboardGoalsOnGoing from "../Dashboard_GoalsOnGoing"
import DashboardGoalsCreate from "../Dashboard_GoalsCreate"
import DashboardActivitiesCreate from "../Dashboard_ActivitiesCreate"

import {
	Cards,
	CardsList,
	Container,
	Header,
	Main,
	MyGoals,
	MyActivities,
	NavigationButton,
	Overview,
	OverviewItem,
	SubMenu,
	Username,
	ActivitiesContainer,
} from "./group.style"
import { useState } from "react"
import { useGroup } from "../../providers/Group"

const DashboardGroup = () => {
	const {
		goals,
		activities,
		isAdmin,
		group: { name },
	} = useGroup()

	const [isActiveGoalOnGoing, setIsActiveGoalOnGoing] = useState(true)
	const [isActiveGoalCompleted, setIsActiveGoalCompleted] = useState(false)
	const [isActiveGoalAchieved, setIsActiveGoalAchieved] = useState(false)
	const [isActiveGoalAll, setIsActiveGoalAll] = useState(true)
	const [isActivitiesAll, setIsActivitesAll] = useState(true)

	const handleNavigationOnGoing = () => {
		setIsActiveGoalOnGoing(true)
		setIsActiveGoalCompleted(false)
		setIsActiveGoalAchieved(false)
	}

	const handleNavigationCompleted = () => {
		setIsActiveGoalOnGoing(false)
		setIsActiveGoalCompleted(true)
		setIsActiveGoalAchieved(false)
	}

	const PREFIX = "@HS-"

	const parseName = (str) => str?.slice(PREFIX.length)

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
				<span>{name && parseName(name)}</span>
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
							<span> {goals.length} metas </span> do grupo
						</OverviewItem>
						<OverviewItem variants={MenuAnimation}>
							<span>{activities.length} atividades </span> do grupo
						</OverviewItem>
					</CardsList>
				</Overview>

				<MyGoals variants={LeftAnimation}>
					<Header>
						<span>Metas</span>
						<div>
							<button onClick={() => setIsActiveGoalAll(true)}>Todas</button>
							{isAdmin() && (
								<button onClick={() => setIsActiveGoalAll(false)}>Criar</button>
							)}
						</div>
					</Header>

					{isActiveGoalAll ? (
						<Main>
							<SubMenu>
								<NavigationButton
									onClick={handleNavigationOnGoing}
									isActive={isActiveGoalOnGoing}
								>
									<span>Em andamento</span>
								</NavigationButton>

								<NavigationButton
									onClick={handleNavigationCompleted}
									isActive={isActiveGoalCompleted}
								>
									<span>Completas</span>
								</NavigationButton>
							</SubMenu>
							<div>
								{isActiveGoalOnGoing && <DashboardGoalsOnGoing />}
								{isActiveGoalCompleted && <DashboardGoalsCompleted />}
								{isActiveGoalAchieved && <DashboardGoalsAchieved />}
							</div>
						</Main>
					) : (
						<DashboardGoalsCreate />
					)}
				</MyGoals>

				<MyActivities variants={RightAnimation}>
					<Header>
						<span>Atividades</span>
						<div>
							<button onClick={() => setIsActivitesAll(true)}>Todas</button>
							{isAdmin() && (
								<button onClick={() => setIsActivitesAll(false)}>Criar</button>
							)}
						</div>
					</Header>
					<ActivitiesContainer>
						<SubMenu
							initial="hidden"
							animate="visible"
							variants={CardsContainerAnimation}
						>
							{isActivitiesAll ? (
								activities.map((activity, i) => (
									<ActivitiesCard
										custom={i}
										animate="visible"
										initial="hidden"
										variants={CardsAnimation}
										key={activity.id}
										activity={activity}
									/>
								))
							) : (
								<DashboardActivitiesCreate />
							)}
						</SubMenu>
					</ActivitiesContainer>
				</MyActivities>
			</Cards>
		</Container>
	)
}

export default DashboardGroup
