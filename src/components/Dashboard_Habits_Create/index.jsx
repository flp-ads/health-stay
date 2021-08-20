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

import { useHabits } from "../../providers/Habits";

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

  const { addHabit } = useHabits();

  const onFormSubmit = (formData) => {
    addHabit(formData);
  };

  const categoryList = [
    "Saúde Mental",
    "Saúde Física",
    "Reeducação",
    "Alimentação",
  ];
  const difficultyList = ["Fácil", "Média", "Difícil"];
  const frequencyList = ["Diária", "Semanal", "Mensal"];

  return (
    <Container>
      <form id="create_habit_form" onSubmit={handleSubmit(onFormSubmit)}>
        <div>
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
        </div>
        <div>
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
        </div>
      </form>
      <Button type="submit" form="create_habit_form">
        Criar hábito
      </Button>
    </Container>
  );
};

export default CreateHabit;
