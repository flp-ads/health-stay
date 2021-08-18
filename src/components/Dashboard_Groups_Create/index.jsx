import { CardsList } from "./groups_create.style"
import Input from "../../components/Global_Input"
import Button from "../../components/Global_Button"
import { FaPencilAlt, FaBox, FaAlignLeft } from "react-icons/fa"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import api from "../../services/api"
import { useLogin } from "../../providers/User"
import { useGroups } from "../../providers/Groups"
import { toast } from "react-toastify"

const PREFIX = "@HS-"
const categoryList = [
	"Alimentação",
	"Saúde Física",
	"Saúde Mental",
	"Reeducação",
]

const DashboardGroupsCreate = () => {
	const { accToken } = useLogin()
	const { fetchMyGroups } = useGroups()

	const schema = yup.object().shape({
		name: yup.string().required("campo obrigatório"),
		description: yup.string().required("campo obrigatório"),
		category: yup
			.string()
			.test("Tests the category", "campo obrigatório", (val) => val !== ""),
	})

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	})

	const onSubmit = (data) => {
		const group = {
			...data,
			name: PREFIX + data.name,
		}

		api
			.post("/groups/", group, {
				headers: {
					Authorization: `Bearer ${accToken}`,
				},
			})
			.then(() => {
				toast.success(`${data.name} criado!`)
				fetchMyGroups()
			})
			.catch((err) => console.log(err))
	}

	return (
		<div>
			<CardsList>
				<form id="create_group" onSubmit={handleSubmit(onSubmit)}>
					<Input
						placeholder="Nome do grupo"
						register={register}
						icon={FaPencilAlt}
						name="name"
						error={errors.name?.message}
						type="text"
					/>

					<Input
						placeholder="Descrição"
						register={register}
						icon={FaAlignLeft}
						name="description"
						error={errors.description?.message}
						type="text area"
					/>

					<Input
						selectPlaceholder="Categoria"
						register={register}
						icon={FaBox}
						name="category"
						error={errors.category?.message}
						list={categoryList}
					/>

					<Button type="submit" form="create_group">
						Criar Grupo
					</Button>
				</form>
			</CardsList>
		</div>
	)
}

export default DashboardGroupsCreate
