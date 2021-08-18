import { createContext, useContext, useState } from "react"
import { useLogin } from "../User"

const HabitsContext = createContext()

export const HabitsProvider = ({ children }) => {
	// Escreva suas funções aqui!

	//User Habits
	const [myHabits, setMyHabits] = useState([])
	
	const { accToken } = useLogin();

	const getUserHabits = () => {

	}

	return (
		<HabitsContext.Provider value={null}>{children}</HabitsContext.Provider>
	)
}

export const useHabits = () => useContext(HabitsContext)
