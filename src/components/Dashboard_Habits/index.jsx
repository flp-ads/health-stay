import { useHistory } from "react-router";
import { useState } from "react";

import {
  Container,
  Username,
  HabitsInfo,
  Header,
  InfoItem,
  Main,
  Overview,
  NavigationButton,
  SubMenu,
} from "./habits.home.style";

import MyHabits from "../Dashboard_Habits_My";
import AchievedHabits from "../Dashboard_Habits_Achieved";
import CreateHabit from "../Dashboard_Habits_Create";

import { useHabits } from "../../providers/Habits";

const DashboardHabits = () => {
  const history = useHistory();
  const MAX_CARDS = 4;

  const [isActiveMy, setIsActiveMy] = useState(true);
  const [isActiveAchieved, setIsActiveAchieved] = useState(false);
  const [isActiveCreate, setIsActiveCreate] = useState(false);

  const handleNavigationMy = () => {
    setIsActiveMy(true);
    setIsActiveAchieved(false);
    setIsActiveCreate(false);
  };

  const handleNavigationAchieved = () => {
    setIsActiveMy(false);
    setIsActiveAchieved(true);
    setIsActiveCreate(false);
  };

  const handleNavigationCreate = () => {
    setIsActiveMy(false);
    setIsActiveAchieved(false);
    setIsActiveCreate(true);
  };

  const handleNavigation = (path) => history.push(path);

  const { habitsCount, achievedHabitsCount } = useHabits();

  return (
    <Container>
      <Username>
        Bem vindo aos <span>seus Hábitos</span>
      </Username>

      <Overview>
        <Header>Resumo</Header>

        <HabitsInfo>
          <InfoItem>
            Você tem
            <p>{habitsCount} hábitos</p>
          </InfoItem>

          <InfoItem>
            Você tem
            <p>{achievedHabitsCount} hábitos concluídos</p>
          </InfoItem>
        </HabitsInfo>
      </Overview>

      <Main>
        <SubMenu>
          <NavigationButton onClick={handleNavigationMy} isActive={isActiveMy}>
            Meus <span>Hábitos</span>
          </NavigationButton>

          <NavigationButton
            onClick={handleNavigationAchieved}
            isActive={isActiveAchieved}
          >
            <span>Hábitos</span> concluídos
          </NavigationButton>
          <NavigationButton
            onClick={handleNavigationCreate}
            isActive={isActiveCreate}
          >
            Criar um <span>Hábito</span>
          </NavigationButton>
        </SubMenu>
        <div>
          {isActiveMy && (
            <MyHabits
              MAX_CARDS={MAX_CARDS}
              handleNavigation={handleNavigation}
            />
          )}
          {isActiveAchieved && (
            <AchievedHabits
              MAX_CARDS={MAX_CARDS}
              handleNavigation={handleNavigation}
            />
          )}
          {isActiveCreate && <CreateHabit />}
        </div>
      </Main>
    </Container>
  );
};

export default DashboardHabits;
