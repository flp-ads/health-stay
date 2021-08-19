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

	const handleNavigationAchieved = () => {
		setIsActiveGoalOnGoing(false)
		setIsActiveGoalCompleted(false)
		setIsActiveGoalAchieved(true)
	}

	const PREFIX = "@HS-"

	const parseName = (str) => str.slice(PREFIX.length)

	return (
		<Container>
			<Username>
				<span>{parseName(name)}</span>
			</Username>
			<Cards>
				<Overview>
					<Header>Resumo</Header>
					<CardsList>
						<OverviewItem>
							<span> {goals.length} metas </span> do grupo
						</OverviewItem>
						<OverviewItem>
							<span>{activities.length} atividades </span> do grupo
						</OverviewItem>
					</CardsList>
				</Overview>
				<MyGoals>
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

								<NavigationButton
									onClick={handleNavigationAchieved}
									isActive={isActiveGoalAchieved}
								>
									<span>Arquivadas</span>
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

				<MyActivities>
					<Header>
						<span>Atividades</span>
						<div>
							<button onClick={() => setIsActivitesAll(true)}>Todas</button>
							{isAdmin() && (
								<button onClick={() => setIsActivitesAll(false)}>Criar</button>
							)}
						</div>
					</Header>
					<Main>
						<SubMenu>
							{isActivitiesAll ? (
								goals.map((group) => (
									<ActivitiesCard group={group.activities} />
								))
							) : (
								<DashboardActivitiesCreate />
							)}
						</SubMenu>
					</Main>
				</MyActivities>
			</Cards>
		</Container>
	)
}

export default DashboardGroup
