import { useHistory } from "react-router-dom";
import GroupCard from "../Group_Card";
import HabitsCard from "../Habits_Card";
import {
  All,
  Cards,
  CardsList,
  Container,
  Header,
  MyGroups,
  MyHabits,
  Overview,
  OverviewItem,
  Username,
} from "./dashboard_home.style";
import { useGroups } from "../../providers/Groups";
import { useHabits } from "../../providers/Habits";
import { useLogin } from "../../providers/User";

const DashboardHome = () => {
  const history = useHistory();
  const MAX_CARDS = 3;

  const handleNavigation = (path) => history.push(path);

  const { subscribledGroupsCount, myGroups } = useGroups();
  const { habitsCount, unachievedHabits } = useHabits();
  const { userName } = useLogin();

  return (
    <Container>
      <Username>
        Olá, <span>{userName}</span>
        <p>Bem vindo</p>
      </Username>
      <Cards>
        <Overview>
          <Header>Resumo</Header>
          <CardsList>
            <OverviewItem>
              Você está inscrito em <p>{subscribledGroupsCount} grupos</p>
            </OverviewItem>
            <OverviewItem>
              Você tem registrado <p>{habitsCount} habitos</p>
            </OverviewItem>
          </CardsList>
        </Overview>
        <MyGroups>
          <Header>
            Meus <span>Grupos</span>
          </Header>
          <CardsList>
            {myGroups.slice(0, MAX_CARDS).map((group) => (
              <GroupCard group={group} />
            ))}
          </CardsList>
          {myGroups.length > MAX_CARDS && (
            <All onClick={() => handleNavigation("grupos")}>
              Ver <span>todos</span>
            </All>
          )}
        </MyGroups>
        <MyHabits>
          <Header>
            Meus <span>Hábitos</span>
          </Header>
          <CardsList>
            {unachievedHabits.slice(0, MAX_CARDS).map((habit) => (
              <HabitsCard key={habit.id} habit={habit} />
            ))}
          </CardsList>
          {unachievedHabits.length > MAX_CARDS && (
            <All onClick={() => handleNavigation("habitos")}>
              Ver <span>todos</span>
            </All>
          )}
        </MyHabits>
      </Cards>
    </Container>
  );
};

export default DashboardHome;
