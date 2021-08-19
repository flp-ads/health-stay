import { Container } from "./goals.style"
import Input from "../Global_Input"
import Button from "../Global_Button"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { BiPencil } from "react-icons/bi"
import { FiLayers } from "react-icons/fi"
import { useGroup } from "../../providers/Group"

const difficultyList = [
	"Muito Fácil",
	"Fácil",
	"Médio",
	"Difícil",
	"Muito Difícil",
]

const DashboardGoalsCreate = () => {
	const { addGoal } = useGroup()

	const formSchema = yup.object().shape({
		title: yup.string().required("Preencha este campo"),
		difficulty: yup
			.string()
			.test("Tests the select", "Selecione uma opção", (val) => val !== ""),
	})

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(formSchema),
	})

	const onFormSubmit = (data) => addGoal(data)

	return (
		<Container>
			<form id="create_goal_form" onSubmit={handleSubmit(onFormSubmit)}>
				<Input
					name="title"
					placeholder="Título da meta"
					icon={BiPencil}
					register={register}
					error={errors.title?.message}
				/>

				<Input
					name="difficulty"
					selectPlaceholder="Dificuldade"
					icon={FiLayers}
					register={register}
					error={errors.difficulty?.message}
					list={difficultyList}
				/>
			</form>
			<Button type="submit" form="create_goal_form">
				Criar meta
			</Button>
		</Container>
	)
}

export default DashboardGoalsCreate
