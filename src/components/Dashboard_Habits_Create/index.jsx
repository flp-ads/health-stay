import { Container } from "./habits.create.styles";

import Input from "../Global_Input";
import Button from "../Global_Button";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { BsInboxes } from "react-icons/bs";
import { BiPencil, BiLineChart } from "react-icons/bi";
import { FiLayers } from "react-icons/fi";
import api from "../../services/api";
import { toast } from "react-toastify";

import { useLogin } from "../../providers/User";

const CreateHabit = () => {
  const formSchema = yup.object().shape({
    title: yup.string().required("Preencha este campo"),
    category: yup.string().required("Selecione uma opção"),
    difficulty: yup.string().required("Selecione uma opção"),
    frequency: yup.string().required("Selecione uma opção"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const { accToken } = useLogin();

  const onFormSubmit = ({ title, category, difficulty, frequency }) => {
    api
      .post("/habits/", {
        title,
        category,
        difficulty,
        frequency,
        achieved: false,
        how_much_achieved: 0,
        user: 1,
      })
      .then((_) => toast.success("Hábito cadastrado com sucesso!"))
      .catch((_) => toast.error("Ops... Algo deu errado"));
  };

  const categoryList = [];
  const difficultyList = [];
  const frequencyList = [];

  return (
    <Container>
      <form id="create_habit_form" onSubmit={handleSubmit(onFormSubmit)}>
        <Input
          name="title"
          placeholder="Título"
          icon={BiPencil}
          register={register}
          error={errors.title?.message}
        />
        <Input
          name="category"
          selectPlaceholder="Categoria"
          icon={BsInboxes}
          register={register}
          error={errors.category?.message}
          list={categoryList}
        />
        <Input
          name="difficulty"
          selectPlaceholder="Dificuldade"
          icon={FiLayers}
          register={register}
          error={errors.difficulty?.message}
          list={difficultyList}
        />
        <Input
          name="frequency"
          selectPlaceholder="Frequência"
          icon={BiLineChart}
          register={register}
          error={errors.frequency?.message}
          list={frequencyList}
        />
      </form>
      <Button type="submit" form="create_habit_form">
        Criar hábito
      </Button>
    </Container>
  );
};

export default CreateHabit;
