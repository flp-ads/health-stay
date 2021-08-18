import { Container } from "./activities.style";
import Input from "../Global_Input";
import Button from "../Global_Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { BiPencil } from "react-icons/bi";
import { FiCalendar, FiClock } from "react-icons/fi";

const DashboardActivitiesCreate = () => {
  const formSchema = yup.object().shape({
    title: yup.string().required("Preencha este campo"),
    realization_time: yup.string().required("Preencha este campo"),
    realization_date: yup.string().required("Preencha este campo"),
  });

  // pra fazer a requisição com com o axios vai precisar tratar os dados da data e hora ex. concatenar realization_date com realization_time

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onFormSubmit = () => {};

  return (
    <Container>
      <form id="create_activities_form" onSubmit={handleSubmit(onFormSubmit)}>
        <Input
          name="title"
          placeholder="Título da meta"
          icon={BiPencil}
          register={register}
          error={errors.title?.message}
        />

        <Input
          name="realization_date"
          placeholder="Data"
          icon={FiCalendar}
          register={register}
          error={errors.realization_date?.message}
        />

        <Input
          name="realization_time"
          placeholder="Hora"
          icon={FiClock}
          register={register}
          error={errors.realization_time?.message}
        />
      </form>
      <Button type="submit" form="create_activities_form">
        Criar Atividade
      </Button>
    </Container>
  );
};

export default DashboardActivitiesCreate;
