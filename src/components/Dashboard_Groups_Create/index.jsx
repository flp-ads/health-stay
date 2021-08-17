import {
  MyGroups,
  Header,
  CategoryContainer,
  SelectContainer,
  CardsList,
} from "../Dashboard_Groups/groups_home.style";
import GlobalInput from "../../components/Global_Input";
import GlobalButton from "../../components/Global_Button";
import { FaPencilAlt, FaBox, FaAlignLeft } from "react-icons/fa";

const DashboardGroupsCreate = ({
  handleSubmit,
  onSubmit,
  register,
  errors,
}) => {
  return (
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
  );
};

export default DashboardGroupsCreate;
