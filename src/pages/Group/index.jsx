import { useParams } from "react-router-dom"
import DashboardGroup from "../../components/Dashboard_Group"
import { Container } from "./group.style"
import { useGroup } from "../../providers/Group"
import { useEffect, useRef } from "react"

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
			</div>
		</Container>
	)
}

export default Group
