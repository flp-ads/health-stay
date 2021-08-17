import { createContext, useContext } from "react"

const HabitsContext = createContext()

export const HabitsProvider = ({ children }) => {
	// Escreva suas funções aqui!

	return (
		<HabitsContext.Provider value={null}>{children}</HabitsContext.Provider>
	)
}

export const useHabits = () => useContext(HabitsContext)
