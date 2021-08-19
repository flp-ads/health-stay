import { createContext, useContext, useState } from "react"
import api from "../../services/api"
import { useLogin } from "../../providers/User"
import { toast } from "react-toastify"

const GroupContext = createContext()

export const GroupProvider = ({ children }) => {
	const [group, setGroup] = useState({})
	const [goals, setGoals] = useState([])
	const [activities, setActivities] = useState([])

	const { accToken, userId } = useLogin()

	const fetchGroup = (id) => {
		api
			.get(`/groups/${id}/`)
			.then(({ data }) => {
				const { goals: g, activities: a } = data

				setGroup(data)
				setGoals(g)
				setActivities(a)
			})
			.catch((err) => console.log(err))
	}

	const isAdmin = () => userId === group?.creator?.id

	const updateGoals = () => {
		api
			.get(`/goals/?group=${group.id}`)
			.then(({ data: { results } }) => setGoals(results))
			.catch((err) => console.log(err))
	}

	const addGoal = (goalData) => {
		if (isAdmin()) {
			api
				.post(
					"/goals/",
					{
						...goalData,
						group: group.id,
						how_much_achieved: 0,
					},
					{
						headers: {
							Authorization: `Bearer ${accToken}`,
						},
					}
				)
				.then(() => {
					toast.success("Objetivo criado!")
					updateGoals()
				})
				.catch((err) => console.log(err))
		}
	}

	const removeGoal = (goalId) => {
		api
			.delete(`/goals/${goalId}/`, {
				headers: {
					Authorization: `Bearer ${accToken}`,
				},
			})
			.then(() => {
				toast.success("Objetivo removido!")
				updateGoals()
			})
			.catch((err) => console.log(err))
	}

	const editGoal = (goalId, achieved) => {
		api
			.patch(
				`/goals/${goalId}/`,
				{
					achieved: !achieved,
				},
				{
					headers: {
						Authorization: `Bearer ${accToken}`,
					},
				}
			)
			.then((resp) => {
				console.log(resp)
				updateGoals()
			})
			.catch((err) => console.log(err))
	}

	const reset = () => {
		setGroup({})
		setGoals([])
		setActivities([])
	}

	return (
		<GroupContext.Provider
			value={{
				fetchGroup,
				group,
				goals,
				activities,
				editGoal,
				addGoal,
				removeGoal,
				isAdmin,
				reset,
			}}
		>
			{children}
		</GroupContext.Provider>
	)
}

export const useGroup = () => useContext(GroupContext)
