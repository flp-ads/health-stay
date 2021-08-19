import { createContext, useState, useContext, useEffect, useRef } from "react"
import { toast } from "react-toastify"
import jwt_decode from "jwt-decode"

import api from "../../services/api"

const UserContext = createContext()

export const UserContextProvider = ({ children }) => {
	const [accToken, setAccToken] = useState(
		JSON.parse(localStorage.getItem("@HS:UserToken")) || ""
	)
	const [userId, setUserId] = useState(
		JSON.parse(localStorage.getItem("@HS:UserId")) || -1
	)
	const [userName, setUserName] = useState("")

	const userLogin = (formData) => {
		api
			.post("/sessions/", formData)
			.then((response) => {
				const { access } = response.data
				const { user_id } = jwt_decode(access)
				setUserId(user_id)
				setAccToken(access)
				localStorage.setItem("@HS:UserId", JSON.stringify(user_id))
				localStorage.setItem("@HS:UserToken", JSON.stringify(access))
				toast.success("Login bem sucedido")
			})
			.catch((err) => {
				if (!!err) {
					toast.error("Usuário ou senha incorretos")
				}
			})
	}

	const reset = () => {
		setUserName("")
		setUserId(-1)
		setAccToken("")
	}

	const getUserName = () => {
		api
			.get(`users/${userId}/`)
			.then((res) => setUserName(res.data.username))
			.catch((err) => console.log(err))
	}

	const RefGetUserName = useRef(getUserName)

	useEffect(() => {
		if (userId !== -1 && accToken !== "") {
			RefGetUserName.current()
		}
	}, [accToken, userId])

	return (
		<UserContext.Provider
			value={{ accToken, userLogin, userId, userName, reset }}
		>
			{children}
		</UserContext.Provider>
	)
}

export const useLogin = () => useContext(UserContext)
