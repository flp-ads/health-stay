import HabitsCard from "../Habits_Card";
import { CardsList } from "./achieved.habits.style";
import { useHabits } from "../../providers/Habits";

const AchievedHabits = ({ MAX_CARDS, handleNavigation }) => {

  const { achievedHabits } = useHabits();

  return (
    <div>
      <CardsList>
        {achievedHabits.map((habit) => (
            <HabitsCard key={habit.id} habit={habit} />
          ))}
      </CardsList>
    </div>
  );
};

export default AchievedHabits;


