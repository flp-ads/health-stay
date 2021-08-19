import axios from "axios"
import { createContext, useContext, useEffect, useRef, useState } from "react"
import { toast } from "react-toastify"
import api from "../../services/api"
import { useLogin } from "../User"

const GroupsContext = createContext()
const PREFIX = "@HS-"

export const GroupsProvider = ({ children }) => {
	// All the groups where the user is not registered
	const [groups, setGroups] = useState([])
	// All the groups where the user is registered
	const [myGroups, setMyGroups] = useState([])
	// Total number of groups where the user is registered
	const [subscribledGroupsCount, setSubscribledGroupsCount] = useState(0)
	// Total number of goals from the user's groups
	const [groupGoalsCount, setGroupGoalsCount] = useState(0)
	// Total number of activities from the user's groups
	const [groupActivitiesCount, setGroupActivitiesCount] = useState(0)
	// Next APIS's page
	const [nextPage, setNextPage] = useState(null)

	const { userId, accToken } = useLogin()

	const fetchMyGroups = () => {
		api
			.get("/groups/subscriptions/", {
				headers: {
					Authorization: `Bearer ${accToken}`,
				},
			})
			.then(({ data }) => {
				setMyGroups(data)
			})
			.catch((err) => console.log(err))
	}

	const fetchMyGroupsRef = useRef(fetchMyGroups)

	useEffect(() => {
		const initialEndPoint = `https://kabit-api.herokuapp.com/groups/?search=${PREFIX}`

		const parseGroups = (groups) =>
			groups.filter((g) => !g.users_on_group.find((u) => u.id === userId))

		const fetchGroups = (page = initialEndPoint) => {
			if (page) {
				axios
					.get(page)
					.then(({ data: { results, next } }) => {
						setNextPage(next)
						setGroups((g) => [...g, ...parseGroups(results)])
					})
					.catch((err) => console.log(err))
			}
		}

		if (userId !== -1) {
			fetchMyGroupsRef.current()
			fetchGroups()
		}
	}, [accToken, userId])

	useEffect(() => {
		setSubscribledGroupsCount(myGroups.length)
		setGroupGoalsCount(myGroups.reduce((acc, cur) => acc + cur.goals.length, 0))
		setGroupActivitiesCount(
			myGroups.reduce((acc, cur) => acc + cur.activities.length, 0)
		)
	}, [myGroups])

	const subscribleToGroup = (group) => {
		const { id, name } = group

		api
			.post(`/groups/${id}/subscribe/`, null, {
				headers: {
					Authorization: `Bearer ${accToken}`,
				},
			})
			.then(() => {
				updateGroups(group)
				toast.success(`Você entrou em ${name}!`)
			})
			.catch((err) => console.log(err))
	}

	const updateGroups = (group) => {
		setGroups((groups) => groups.filter((g) => g.id !== group.id))
		setMyGroups((g) => [...g, group])
	}

	const loadMoreGroups = () => {
		axios
			.get(nextPage)
			.then(({ data: { next, results } }) => {
				setNextPage(next)
				setGroups((g) => [...g, ...results])
			})
			.catch((err) => console.log(err))
	}

	return (
		<GroupsContext.Provider
			value={{
				myGroups,
				groups,
				subscribledGroupsCount,
				groupGoalsCount,
				groupActivitiesCount,
				nextPage,
				subscribleToGroup,
				loadMoreGroups,
				fetchMyGroups,
			}}
		>
			{children}
		</GroupsContext.Provider>
	)
}

export const useGroups = () => useContext(GroupsContext)
