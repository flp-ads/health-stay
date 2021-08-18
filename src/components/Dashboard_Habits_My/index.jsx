import HabitsCard from "../Habits_Card";
import { CardsList, All } from "./habits.my.style";

import { useHabits } from "../../providers/Habits";

const MyHabits = ({ MAX_CARDS, handleNavigation }) => {

  const { habits } = useHabits()

  return (
    <div>
      <CardsList>
        {habits.map((habit) => (
          <HabitsCard key={habit.id} habit={habit} />
        ))}
      </CardsList>
    </div>
  );
};

export default MyHabits;

// const habits = [
//   {
//     id: 46,
//     title: "Vem pro fut",
//     category: "Esportes",
//     difficulty: "Facil",
//     frequency: "4x/semana",
//     achieved: false,
//     how_much_achieved: 0,
//     user: 6,
//   },
//   {
//     id: 20,
//     title: "ebegebtbe",
//     category: "ebggebe",
//     difficulty: "ebegbebgeb",
//     frequency: "ebegbegbe",
//     achieved: false,
//     how_much_achieved: 4,
//     user: 10,
//   },
//   {
//     id: 110,
//     title: "Python",
//     category: "fitness",
//     difficulty: "fácil",
//     frequency: "todos os dias",
//     achieved: false,
//     how_much_achieved: 66,
//     user: 75,
//   },
//   {
//     id: 47,
//     title: "Teste",
//     category: "teste",
//     difficulty: "teste",
//     frequency: "teste",
//     achieved: false,
//     how_much_achieved: 0,
//     user: 6,
//   },
//   {
//     id: 111,
//     title: "Python",
//     category: "fitness",
//     difficulty: "fácil",
//     frequency: "todos os dias",
//     achieved: false,
//     how_much_achieved: 66,
//     user: 75,
//   },
//   {
//     id: 48,
//     title: "Terminar entrega",
//     category: "Estudo",
//     difficulty: "Impossível",
//     frequency: "Diária",
//     achieved: false,
//     how_much_achieved: 30,
//     user: 36,
//   },
//   {
//     id: 49,
//     title: "pular",
//     category: "Esporte",
//     difficulty: "Fácil",
//     frequency: "Diária",
//     achieved: false,
//     how_much_achieved: 0,
//     user: 20,
//   },
//   {
//     id: 112,
//     title: "teste",
//     category: "saúde",
//     difficulty: "mais de 8 mil",
//     frequency: "diariamente",
//     achieved: false,
//     how_much_achieved: 12,
//     user: 72,
//   },
//   {
//     id: 17,
//     title: "ebrfhjebhtvbebhv",
//     category: "fj vefg vhe gv e",
//     difficulty: "ejknbvegjbjeg",
//     frequency: "eg e beb b eb",
//     achieved: false,
//     how_much_achieved: 12,
//     user: 10,
//   },
//   {
//     id: 15,
//     title: "teste2",
//     category: "fv feg ve",
//     difficulty: "egbejbjke",
//     frequency: "ejkngjebet",
//     achieved: false,
//     how_much_achieved: 16,
//     user: 10,
//   },
//   {
//     id: 11,
//     title: "teste",
//     category: "bwdfbv",
//     difficulty: "sjhfbsh",
//     frequency: "sd fsdnf",
//     achieved: false,
//     how_much_achieved: 4,
//     user: 10,
//   },
//   {
//     id: 14,
//     title: "teste2",
//     category: "eteteyy",
//     difficulty: "etyetyey",
//     frequency: "eyetyeyy",
//     achieved: false,
//     how_much_achieved: 4,
//     user: 10,
//   },
//   {
//     id: 114,
//     title: "testando",
//     category: "Organização",
//     difficulty: "Médio",
//     frequency: "Diário",
//     achieved: false,
//     how_much_achieved: 0,
//     user: 73,
//   },
//   {
//     id: 115,
//     title: "asdasd",
//     category: "Limpeza",
//     difficulty: "Médio",
//     frequency: "Diário",
//     achieved: false,
//     how_much_achieved: 0,
//     user: 73,
//   },
//   {
//     id: 57,
//     title: "correr",
//     category: "Esporte",
//     difficulty: "Fácil",
//     frequency: "Diária",
//     achieved: false,
//     how_much_achieved: 0,
//     user: 20,
//   },
// ];
