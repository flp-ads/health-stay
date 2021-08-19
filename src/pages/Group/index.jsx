import { useParams } from "react-router-dom"
import DashboardGroup from "../../components/Dashboard_Group"
import DashboardMenu from "../../components/Dashboard_Menu"
import { Container } from "./group.style"
import { useGroup } from "../../providers/Group"
import { useEffect, useRef } from "react"
import api from "../../services/api"

const Group = () => {
	const { id } = useParams()
	const { fetchGroup, reset } = useGroup()

	const RefReset = useRef(reset)
	const RefFetch = useRef(fetchGroup)

	useEffect(() => {
		RefFetch.current(id)

		return RefReset.current
	}, [id])

	return (
		<Container>
			<div className="inner_container">
				<DashboardGroup />
				{/* <DashboardMenu /> */}
			</div>
		</Container>
	)
}

export default Group
