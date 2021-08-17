import {
  MyGroups,
  Header,
  CategoryContainer,
  SelectContainer,
  CardsList,
  MyGroupsMobile,
} from "../Dashboard_Groups/groups_home.style";
import GlobalInput from "../../components/Global_Input";
import GlobalButton from "../../components/Global_Button";
import { FaPencilAlt, FaBox, FaAlignLeft } from "react-icons/fa";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const DashboardGroupsCreate = () => {
  const schema = yup.object().shape({
    name: yup.string().required("campo obrigatório"),
    description: yup.string().required("campo obrigatório"),
    category: yup.string().required("campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <MyGroups>
        <Header>
          Criar <span>Grupo</span>
        </Header>
        <CardsList>
          <CategoryContainer onSubmit={handleSubmit(onSubmit)}>
            <GlobalInput
              placeholder="Nome do grupo"
              register={register}
              icon={FaPencilAlt}
              name="name"
              error={errors.name?.message}
              type="text"
            />
            <SelectContainer>
              <FaBox />
              <select name="category">
                <option value="categoria" selected disabled>
                  Categoria
                </option>
                <option value="valor1">Valor1</option>
                <option value="valor2">Valor2</option>
                <option value="valor3">Valor3</option>
              </select>
            </SelectContainer>

            <GlobalInput
              placeholder="Descrição"
              register={register}
              icon={FaAlignLeft}
              name="description"
              error={errors.description?.message}
              type="text area"
            />
            <GlobalButton type="submit">Criar Grupo</GlobalButton>
          </CategoryContainer>
        </CardsList>
      </MyGroups>

      <MyGroupsMobile>
        <Header>
          Criar <span>Grupo</span>
        </Header>
        <CardsList>
          <CategoryContainer onSubmit={handleSubmit(onSubmit)}>
            <GlobalInput
              placeholder="Nome do grupo"
              register={register}
              icon={FaPencilAlt}
              name="name"
              error={errors.name?.message}
              type="text"
            />
            <SelectContainer>
              <FaBox />
              <select name="category">
                <option value="categoria" selected disabled>
                  Categoria
                </option>
                <option value="valor1">Valor1</option>
                <option value="valor2">Valor2</option>
                <option value="valor3">Valor3</option>
              </select>
            </SelectContainer>

            <GlobalInput
              placeholder="Descrição"
              register={register}
              icon={FaAlignLeft}
              name="description"
              error={errors.description?.message}
              type="text area"
            />
            <GlobalButton type="submit">Criar Grupo</GlobalButton>
          </CategoryContainer>
        </CardsList>
      </MyGroupsMobile>
    </>
  );
};

export default DashboardGroupsCreate;
