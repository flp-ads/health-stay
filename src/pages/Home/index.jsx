import Group_Card from "../../components/Group_Card"

const Home = () => {
	const mock = {
		id: 251,
		name: "Nome do Grupo",
		description: "b",
		category: "Categoria",
		creator: {
			id: 1,
			username: "fafa",
			email: "gabriel@kenzie.com.br",
		},
		users_on_group: [],
		goals: [],
		activities: [],
	}
	return (
		<div>
			<Group_Card group={mock} />
		</div>
	)
}

export default Home
