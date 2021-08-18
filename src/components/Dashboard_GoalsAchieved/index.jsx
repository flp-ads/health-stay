import { CardsList, All } from "./goals.style";
import GoalsCard from "../Goals_Card";

const DashboardGoalsAchieved = ({ MAX_CARDS, handleNavigation }) => {
  return (
    <div>
      <CardsList>
        {goals
          .filter((goal) => goal.achieved === true)
          .slice(0, MAX_CARDS)
          .map((goal) => (
            <GoalsCard key={goal.id} group={goal} />
          ))}
      </CardsList>
      {goals.length > MAX_CARDS && (
        <All onClick={() => handleNavigation("grupos")}>
          Ver <span>todos</span>
        </All>
      )}
    </div>
  );
};

export default DashboardGoalsAchieved;

const goals = [
  {
    id: 1918,
    title: "novo",
    difficulty: "Medium",
    achieved: true,
    how_much_achieved: 100,
    group: 26,
  },
  {
    id: 2107,
    title: "React",
    difficulty: "Dificulty test 5",
    achieved: true,
    how_much_achieved: 100,
    group: 26,
  },
  {
    id: 1633,
    title: "asdasd",
    difficulty: "safdsdaf",
    achieved: true,
    how_much_achieved: 80,
    group: 26,
  },
  {
    id: 1674,
    title:
      "Nenhuma falta na academia cometida pelos membros do grupo na semana",
    difficulty: "Díficil",
    achieved: true,
    how_much_achieved: 100,
    group: 26,
  },
  {
    id: 1675,
    title:
      "Nenhuma falta na academia cometida pelos membros do grupo na semana",
    difficulty: "Díficil",
    achieved: true,
    how_much_achieved: 100,
    group: 26,
  },
  {
    id: 2004,
    title: "Eu amo Java",
    difficulty: "Média",
    achieved: false,
    how_much_achieved: 7,
    group: 26,
  },
  {
    id: 2014,
    title: "normaluser",
    difficulty: "Fácil",
    achieved: false,
    how_much_achieved: 76,
    group: 26,
  },
  {
    id: 1995,
    title: "Estudar Python",
    difficulty: "facil",
    achieved: false,
    how_much_achieved: 90,
    group: 26,
  },
  {
    id: 2320,
    title: "Criado através do app",
    difficulty: "Muito dificil",
    achieved: false,
    how_much_achieved: 0,
    group: 26,
  },
  {
    id: 2321,
    title: "Criado através do app2",
    difficulty: "faeefa",
    achieved: false,
    how_much_achieved: 0,
    group: 26,
  },
  {
    id: 2322,
    title: "Criado através do app2",
    difficulty: "faeefa",
    achieved: false,
    how_much_achieved: 0,
    group: 26,
  },
  {
    id: 2323,
    title: "Criado através do app2",
    difficulty: "faeefa",
    achieved: false,
    how_much_achieved: 0,
    group: 26,
  },
  {
    id: 2324,
    title: "Criado através do app3",
    difficulty: "faeefa",
    achieved: false,
    how_much_achieved: 0,
    group: 26,
  },
];
