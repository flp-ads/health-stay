import { Container } from "./activities.style"
import Input from "../Global_Input"
import Button from "../Global_Button"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { BiPencil } from "react-icons/bi"
import { FiCalendar, FiClock } from "react-icons/fi"
import { useGroup } from "../../providers/Group"
import { motion } from "framer-motion"

const DashboardActivitiesCreate = () => {
	const today = new Date().toLocaleDateString().split("/").reverse().join("-")
	const {
		group: { id },
		addActivity,
	} = useGroup()

	const formSchema = yup.object().shape({
		title: yup.string().required("Preencha este campo"),
		realization_time: yup.string().required("Preencha este campo"),
		realization_date: yup.string().required("Preencha este campo"),
	})

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(formSchema),
	})

	const onFormSubmit = ({ title, realization_date, realization_time }) =>
		addActivity({
			title,
			group: id,
			realization_time: `${realization_date}T${realization_time}:00Z`,
		})

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
		<Container>
			<motion.form
				initial="hidden"
				animate="visible"
				variants={FormAnimation}
				id="create_activities_form"
				onSubmit={handleSubmit(onFormSubmit)}
			>
				<Input
					variants={FormItemAnimation}
					name="title"
					placeholder="Título da meta"
					icon={BiPencil}
					register={register}
					error={errors.title?.message}
				/>

				<Input
					variants={FormItemAnimation}
					name="realization_date"
					placeholder="Data"
					icon={FiCalendar}
					register={register}
					error={errors.realization_date?.message}
					type="date"
					min={today}
				/>

				<Input
					variants={FormItemAnimation}
					name="realization_time"
					placeholder="Hora"
					icon={FiClock}
					register={register}
					error={errors.realization_time?.message}
					type="time"
				/>
			</motion.form>
			<Button
				variants={{
					visible: {
						opacity: 1,
						transition: {
							delay: 1.2,
						},
					},
					hidden: {
						opacity: 0,
					},
				}}
				type="submit"
				form="create_activities_form"
			>
				Criar Atividade
			</Button>
		</Container>
	)
}

export default DashboardActivitiesCreate
