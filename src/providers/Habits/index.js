import { createContext, useContext, useState, useEffect } from "react"
import { toast } from "react-toastify"
import api from "../../services/api"
import { useLogin } from "../User"

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
      .then((res) => {
        setUpdateTrigger(!updateTrigger)
        toast.success("Hábito removido com sucesso!");
      })
      .catch((_) => toast.error("Algo deu errado, tente novamente"));
  };

	return (
		<HabitsContext.Provider 
			value={{
				habits,
				unachievedHabits,
				achievedHabits,
				habitsCount,
				achievedHabitsCount,
				addHabit,
				deleteHabit
			}}
		>
			{children}</HabitsContext.Provider>
	)
}

export const useHabits = () => useContext(HabitsContext)
