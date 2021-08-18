import { useHistory } from "react-router-dom";
import { useState } from "react";

import {
  Container,
  Username,
  GroupsInfo,
  Header,
  InfoItem,
  Main,
  Overview,
  NavigationButton,
  SubMenu,
} from "./groups_home.style";

import DashboardGroupsMy from "../Dashboard_Groups_My";
import DashboardGroupsAll from "../Dashboard_Groups_All";
import DashboardGroupsCreate from "../Dashboard_Groups_Create";

const DashboardGroups = () => {

  const history = useHistory();
  const MAX_CARDS = 4;

  const [isActiveMy, setIsActiveMy] = useState(true);
  const [isActiveAll, setIsActiveAll] = useState(false);
  const [isActiveCreate, setIsActiveCreate] = useState(false);

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

  return (
    <Container>

      <Username>
        Bem vindo aos <span>seus Grupos</span>
      </Username>

        <Overview>
          <Header>Resumo</Header>

          <GroupsInfo>
            <InfoItem>
              Você está inscrito em <p>999 grupos</p>
            </InfoItem>

            <InfoItem>
              Você possui <p>999 metas de grupo</p>
            </InfoItem>

            <InfoItem>
              Voce possui <p>999 atividades em grupo</p>
            </InfoItem>
          </GroupsInfo>
        </Overview>

        <Main>
          <SubMenu>
            <NavigationButton
              onClick={handleNavigationMy}
              isActive={isActiveMy}>

              Meus <span>Grupos</span>
            </NavigationButton>

            <NavigationButton
              onClick={handleNavigationAll}
              isActive={isActiveAll}>

              Todos os <span>Grupos</span>
            </NavigationButton>
            
            <NavigationButton
              onClick={handleNavigationCreate}
              isActive={isActiveCreate}>

              Criar <span>Grupo</span>
            </NavigationButton>
          </SubMenu>
          <div>
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
            {isActiveCreate && <DashboardGroupsCreate />}
          </div>
        </Main>
    </Container>
  );
};

export default DashboardGroups;
