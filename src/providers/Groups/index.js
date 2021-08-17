import { createContext, useContext } from "react"

const GroupContext = createContext()

export const GroupProvider = ({ children }) => {
	// Escreva suas funções aqui

	return <GroupContext.Provider value={null}>{children}</GroupContext.Provider>
}

export const useGroups = () => useContext(GroupContext)
