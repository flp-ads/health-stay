import HabitsCard from "../Habits_Card";
import { CardsList } from "./habits.my.style";

import { useHabits } from "../../providers/Habits";

const MyHabits = ({ MAX_CARDS, handleNavigation }) => {

  const { unachievedHabits } = useHabits()

  return (
    <div>
      <CardsList>
        {unachievedHabits.map((habit) => (
          <HabitsCard key={habit.id} habit={habit} />
        ))}
      </CardsList>
    </div>
  );
};

export default MyHabits;


