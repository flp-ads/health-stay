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

	const editGoal = ({ id, achieved }) => {
		api
			.patch(
				`/goals/${id}/`,
				{
					achieved: !achieved,
				},
				{
					headers: {
						Authorization: `Bearer ${accToken}`,
					},
				}
			)
			.then(() => {
				updateGoals()
			})
			.catch((err) => console.log(err))
	}

	const updateActivities = () => {
		api
			.get(`/activities/?group=${group.id}`)
			.then(({ data: { results } }) => setActivities(results))
			.catch((err) => console.log(err))
	}

	const addActivity = (activityData) => {
		api
			.post("/activities/", activityData, {
				headers: {
					Authorization: `Bearer ${accToken}`,
				},
			})
			.then(() => {
				toast.success("Atividade criada!")
				updateActivities()
			})
			.catch((err) => console.log(err))
	}

	const removeActivity = ({ id }) => {
		api
			.delete(`/activities/${id}/`, {
				headers: {
					Authorization: `Bearer ${accToken}`,
				},
			})
			.then(() => {
				toast.success("Atividade removida!")
				updateActivities()
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
				addActivity,
				removeActivity,
			}}
		>
			{children}
		</GroupContext.Provider>
	)
}

export const useGroup = () => useContext(GroupContext)
