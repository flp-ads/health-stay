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
import { motion } from "framer-motion"

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

	const FormAnimation = {
		visible: {
			opacity: 1,
			transition: {
				when: "beforeChildren",
				staggerChildren: 0.3,
			},
		},
		hidden: {
			opacity: 0,
			transition: {
				when: "afterChildren",
			},
		},
	}

	const FormItemAnimation = {
		visible: {
			opacity: 1,
			y: 0,
		},
		hidden: {
			opacity: 0,
			y: -50,
		},
	}

	return (
		<CardsList>
			<motion.form
				initial="hidden"
				animate="visible"
				variants={FormAnimation}
				id="create_group"
				onSubmit={handleSubmit(onSubmit)}
			>
				<Input
					variants={FormItemAnimation}
					placeholder="Nome do grupo"
					register={register}
					icon={FaPencilAlt}
					name="name"
					error={errors.name?.message}
					type="text"
				/>

				<Input
					variants={FormItemAnimation}
					placeholder="Descrição"
					register={register}
					icon={FaAlignLeft}
					name="description"
					error={errors.description?.message}
					type="text area"
				/>

				<Input
					variants={FormItemAnimation}
					selectPlaceholder="Categoria"
					register={register}
					icon={FaBox}
					name="category"
					error={errors.category?.message}
					list={categoryList}
				/>

				<Button variants={FormItemAnimation} type="submit" form="create_group">
					Criar Grupo
				</Button>
			</motion.form>
		</CardsList>
	)
}

export default DashboardGroupsCreate
