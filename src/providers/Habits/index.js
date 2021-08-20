import { createContext, useContext, useState, useEffect } from "react"
import { toast } from "react-toastify"
import api from "../../services/api"
import { useLogin } from "../User"
import { isAfter, parseISO } from "date-fns"

const HabitsContext = createContext()

export const HabitsProvider = ({ children }) => {
	// Escreva suas funções aqui!

	//User Habits
	const [habits, setHabits] = useState([])
	//User Unachieved Habits
	const [unachievedHabits, setUnachievedHabits] = useState([])
	//User Habits achieved
	const [achievedHabits, setAchievedHabits] = useState([])
	//User Habits total count
	const [habitsCount, setHabitsCount] = useState(0)
	//User Habits achieved total count
	const [achievedHabitsCount, setAchievedHabitsCount] = useState(0)
	//Update trigger
	const [updateTrigger, setUpdateTrigger] = useState(false)
	//User Habits progression
	const [habitsProgression, setHabitsProgression] = useState(JSON.parse(localStorage.getItem('@HS:HabitsProg')) || [])


	const { accToken, userId } = useLogin();

	useEffect(() => {
		
		const getMyHabits = () => {

			api
				.get("/habits/personal/", {
					headers: {
						Authorization: `Bearer ${accToken}`,
					},
				})
				.then(({data}) => {

					setHabits(data)
					localStorage.setItem('@HS:HabitsProg', JSON.stringify(habitsProgression))
				})
				.catch((err) => console.log(err))
		}
		
		if (userId !== -1) {
			getMyHabits()
		}
	}, [accToken, userId, updateTrigger])

	useEffect (() => {

		let filterHabits = habits.filter(habit => habit.achieved === true)
		let filterUnachieved = habits.filter(habit => habit.achieved === false)
		
		setUnachievedHabits(filterUnachieved)
		setHabitsCount(habits.length)

		setAchievedHabits(filterHabits)
		setAchievedHabitsCount(filterHabits.length)
	}, [habits])

	const addHabit = (formData) => {

		const {title, category, difficulty, frequency} = formData

		let newHabit = {
			title,
			category,
			difficulty,
			frequency,
			achieved: false,
			how_much_achieved: 0,
			user: userId,
		}

		api
			.post('/habits/', newHabit,
			{
				headers: {
					Authorization: `Bearer ${accToken}`,
				},
			})
			.then((_) => {
				setUpdateTrigger(!updateTrigger)
				toast.success('Hábito criado com sucesso')
			})
			.catch((err) => {
				console.log(err)
			})
	}

	const deleteHabit = (habitID) => {

		api
		.delete(`/habits/${habitID}/`, {
			headers: {
			Authorization: `Bearer ${accToken}`,
			},
		})
		.then((_) => {

			let newHabitData = habitsProgression.filter(habit => habit.id !== habitID)

			setHabitsProgression(newHabitData)
			localStorage.setItem('@HS:HabitsProg', JSON.stringify(newHabitData))
			setUpdateTrigger(!updateTrigger)
			toast.success("Hábito removido com sucesso!");
		})
		.catch((_) => toast.error("Algo deu errado, tente novamente"));
	};

	const updateHabit = (habitID, currentProgress, frequency) => {

		let newProgress = 0
		let newStatus = false

		let currentDate = new Date();
		let nextUpdate = new Date();
		
		if (frequency === 'Diária') {

			nextUpdate.setDate(nextUpdate.getDate() + 1)
			newProgress = currentProgress + 2
		} else if (frequency === 'Semanal') {

			nextUpdate.setDate(nextUpdate.getDate() + 7)
			newProgress = currentProgress + 10
		} else if (frequency === 'Mensal') {

			newProgress = currentProgress + 30
			nextUpdate.setDate(nextUpdate.getDate() + 30)
		}

		if (newProgress >= 100) {

			newProgress = 100
			newStatus = true
		}

		let newHabitProgression = {
			id: habitID,
			last_updated: currentDate,
			next_update_in: nextUpdate,
		}		

		const thisHabit = habitsProgression.filter(item => item.id === habitID) || []
		const { next_update_in } = thisHabit[0] || ''
		const parsedDate = parseISO(next_update_in) || ''

		const canUpdate = isAfter(currentDate, parsedDate)
		const registeredHabitsIDs = habitsProgression.map(item => item.id)

		if (canUpdate || !registeredHabitsIDs.includes(habitID)) {

			api
			.patch(`/habits/${habitID}/`, {
				how_much_achieved: newProgress,
				achieved: newStatus,
			},
			{
				headers: {
					Authorization: `Bearer ${accToken}`,
				},
			})
			.then((_) => {
				let habitsProgressionIDs = habitsProgression.map(item => item.id)
	
				if (!habitsProgressionIDs.includes(habitID)) {
	
					setHabitsProgression([...habitsProgression, newHabitProgression])
				} else {
	
					let newDate = new Date();
					let index = habitsProgression.findIndex(item => item.id === habitID)
					let temp = habitsProgression.slice()
					temp[index].last_updated = newDate
					setHabitsProgression(temp) 
				}
				
				setUpdateTrigger(!updateTrigger)
				toast.success('Progresso atualizado')
			})
			.catch((err) => {
				console.log(err)
			})
		} else {
			toast.error(`Próxima atualização disponível em: ${next_update_in}`)
		}
	}

	return (
		<HabitsContext.Provider 
			value={{
				habits,
				unachievedHabits,
				achievedHabits,
				habitsCount,
				achievedHabitsCount,
				habitsProgression,
				addHabit,
				deleteHabit,
				updateHabit,
			}}
		>
			{children}</HabitsContext.Provider>
	)
}

export const useHabits = () => useContext(HabitsContext)
