import { useState } from "react"

import {
	Container,
	Username,
	GroupsInfo,
	Header,
	InfoItem,
	Main,
	Overview,
	NavigationButton,
	SubMenu,
} from "./groups_home.style"

import DashboardGroupsMy from "../Dashboard_Groups_My"
import DashboardGroupsAll from "../Dashboard_Groups_All"
import DashboardGroupsCreate from "../Dashboard_Groups_Create"
import { useGroups } from "../../providers/Groups"

const DashboardGroups = () => {
	const [isActiveMy, setIsActiveMy] = useState(true)
	const [isActiveAll, setIsActiveAll] = useState(false)
	const [isActiveCreate, setIsActiveCreate] = useState(false)

	const handleNavigationMy = () => {
		setIsActiveMy(true)
		setIsActiveAll(false)
		setIsActiveCreate(false)
	}

	const handleNavigationAll = () => {
		setIsActiveMy(false)
		setIsActiveAll(true)
		setIsActiveCreate(false)
	}

	const handleNavigationCreate = () => {
		setIsActiveMy(false)
		setIsActiveAll(false)
		setIsActiveCreate(true)
	}

	const { subscribledGroupsCount, groupGoalsCount, groupActivitiesCount } =
		useGroups()

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
				staggerChildren: 0.5,
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
		},
		visible: {
			opacity: 1,
		},
	}

	return (
		<Container initial="hidden" animate="visible" variants={ContainerAnimation}>
			<Username>
				<span>Grupos</span>
			</Username>

			<Overview variants={DownAnimation}>
				<Header>Resumo</Header>

				<GroupsInfo
					initial="hidden"
					animate="visible"
					variants={ContainerAnimation}
				>
					<InfoItem variants={MenuAnimation}>
						Você está inscrito em <p>{subscribledGroupsCount} grupos</p>
					</InfoItem>

					<InfoItem variants={MenuAnimation}>
						Você possui <p>{groupGoalsCount} metas de grupo</p>
					</InfoItem>

					<InfoItem variants={MenuAnimation}>
						Voce possui <p>{groupActivitiesCount} atividades em grupo</p>
					</InfoItem>
				</GroupsInfo>
			</Overview>

			<Main variants={RightAnimation}>
				<SubMenu>
					<NavigationButton onClick={handleNavigationMy} isActive={isActiveMy}>
						Meus <span>Grupos</span>
					</NavigationButton>

					<NavigationButton
						onClick={handleNavigationAll}
						isActive={isActiveAll}
					>
						Todos os <span>Grupos</span>
					</NavigationButton>

					<NavigationButton
						onClick={handleNavigationCreate}
						isActive={isActiveCreate}
					>
						Criar <span>Grupo</span>
					</NavigationButton>
				</SubMenu>
				<div>
					{isActiveMy && <DashboardGroupsMy />}
					{isActiveAll && <DashboardGroupsAll />}
					{isActiveCreate && <DashboardGroupsCreate />}
				</div>
			</Main>
		</Container>
	)
}

export default DashboardGroups
