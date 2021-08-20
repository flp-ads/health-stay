import { useState } from "react"

import {
	Container,
	Username,
	HabitsInfo,
	Header,
	InfoItem,
	Main,
	Overview,
	NavigationButton,
	SubMenu,
} from "./habits.home.style"

import MyHabits from "../Dashboard_Habits_My"
import AchievedHabits from "../Dashboard_Habits_Achieved"
import CreateHabit from "../Dashboard_Habits_Create"

import { useHabits } from "../../providers/Habits"

const DashboardHabits = () => {
	const [isActiveMy, setIsActiveMy] = useState(true)
	const [isActiveAchieved, setIsActiveAchieved] = useState(false)
	const [isActiveCreate, setIsActiveCreate] = useState(false)

	const handleNavigationMy = () => {
		setIsActiveMy(true)
		setIsActiveAchieved(false)
		setIsActiveCreate(false)
	}

	const handleNavigationAchieved = () => {
		setIsActiveMy(false)
		setIsActiveAchieved(true)
		setIsActiveCreate(false)
	}

	const handleNavigationCreate = () => {
		setIsActiveMy(false)
		setIsActiveAchieved(false)
		setIsActiveCreate(true)
	}

	const { habitsCount, achievedHabitsCount } = useHabits()

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
				<span>Hábitos</span>
			</Username>

			<Overview variants={DownAnimation}>
				<Header>Resumo</Header>

				<HabitsInfo
					initial="hidden"
					animate="visible"
					variants={ContainerAnimation}
				>
					<InfoItem variants={MenuAnimation}>
						Você tem
						<p>{habitsCount} hábitos</p>
					</InfoItem>

					<InfoItem variants={MenuAnimation}>
						Você tem
						<p>{achievedHabitsCount} hábitos concluídos</p>
					</InfoItem>
				</HabitsInfo>
			</Overview>

			<Main variants={RightAnimation}>
				<SubMenu>
					<NavigationButton onClick={handleNavigationMy} isActive={isActiveMy}>
						Meus <span>Hábitos</span>
					</NavigationButton>

					<NavigationButton
						onClick={handleNavigationAchieved}
						isActive={isActiveAchieved}
					>
						<span>Hábitos</span> concluídos
					</NavigationButton>
					<NavigationButton
						onClick={handleNavigationCreate}
						isActive={isActiveCreate}
					>
						Criar um <span>Hábito</span>
					</NavigationButton>
				</SubMenu>
				<div>
					{isActiveMy && <MyHabits />}
					{isActiveAchieved && <AchievedHabits />}
					{isActiveCreate && <CreateHabit />}
				</div>
			</Main>
		</Container>
	)
}

export default DashboardHabits
