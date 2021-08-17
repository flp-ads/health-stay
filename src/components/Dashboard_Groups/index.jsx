import { useHistory } from "react-router-dom";
import {
  Cards,
  CardsList,
  Container,
  Header,
  MyGroups,
  Overview,
  OverviewItem,
  Username,
  NavigationButton,
  MyGroupsNavigationMobile,
} from "./groups_home.style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useState } from "react";
import DashboardGroupsMy from "../Dashboard_Groups_My";
import DashboardGroupsAll from "../Dashboard_Groups_All";
import DashboardGroupsCreate from "../Dashboard_Groups_Create";

const DashboardGroups = () => {
  const history = useHistory();
  const MAX_CARDS = 3;
  const [isActiveMy, setIsActiveMy] = useState(true);
  const [isActiveAll, setIsActiveAll] = useState(false);
  const [isActiveCreate, setIsActiveCreate] = useState(false);

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

  const handleNavigationMy = () => {
    setIsActiveMy(true);
    setIsActiveAll(false);
    setIsActiveCreate(false);
  };

  const handleNavigationAll = () => {
    setIsActiveMy(false);
    setIsActiveAll(true);
    setIsActiveCreate(false);
  };

  const handleNavigationCreate = () => {
    setIsActiveMy(false);
    setIsActiveAll(false);
    setIsActiveCreate(true);
  };

  const handleNavigation = (path) => history.push(path);

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Container>
      <Username>
        Bem vindo aos <span>seus grupos</span>
      </Username>
      <Cards>
        <Overview>
          <Header>Resumo</Header>
          <CardsList>
            <OverviewItem>
              Você está inscrito em <p>999 grupos</p>
            </OverviewItem>
            <OverviewItem>
              Você possui <p>999 metas de grupo</p>
            </OverviewItem>
            <OverviewItem>
              Voce possui <p>999 atividades em grupo</p>
            </OverviewItem>
          </CardsList>
        </Overview>

        <MyGroups>
          <CardsList>
            <span>
              <NavigationButton
                onClick={handleNavigationMy}
                isActive={isActiveMy}
              >
                Meus <span>Grupos</span>
              </NavigationButton>
            </span>
            <NavigationButton
              onClick={handleNavigationAll}
              isActive={isActiveAll}
            >
              Todos os <span>Grupos</span>
            </NavigationButton>
            <NavigationButton
              onClick={handleNavigationCreate}
              isActive={isActiveCreate}
            >
              Criar <span>Grupo</span>
            </NavigationButton>
          </CardsList>
        </MyGroups>

        <MyGroupsNavigationMobile>
          <CardsList>
            <span>
              <NavigationButton
                onClick={handleNavigationMy}
                isActive={isActiveMy}
              >
                Meus <span>Grupos</span>
              </NavigationButton>
            </span>
            <NavigationButton
              onClick={handleNavigationAll}
              isActive={isActiveAll}
            >
              Todos os <span>Grupos</span>
            </NavigationButton>
            <NavigationButton
              onClick={handleNavigationCreate}
              isActive={isActiveCreate}
            >
              Criar <span>Grupo</span>
            </NavigationButton>
          </CardsList>
        </MyGroupsNavigationMobile>
      </Cards>

      {isActiveMy && (
        <DashboardGroupsMy
          MAX_CARDS={MAX_CARDS}
          handleNavigation={handleNavigation}
        />
      )}
      {isActiveAll && (
        <DashboardGroupsAll
          MAX_CARDS={MAX_CARDS}
          handleNavigation={handleNavigation}
        />
      )}
      {isActiveCreate && (
        <DashboardGroupsCreate
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          register={register}
          errors={errors}
        />
      )}
    </Container>
  );
};

export default DashboardGroups;
