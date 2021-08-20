import {
  Background,
  HabitsCardContainer,
  HabitsCardContent,
  HabitsCardHeaderContainer,
  HabitsCardInfoContainer,
  HabitsCardTitleContainer,
  HabitsCardFooterContainer,
  ProgressContainer,
  ProgressBar,
  UpdateButton,
} from "./card.style";

import { FiTrash2, FiCheckCircle } from "react-icons/fi";
import { useHabits } from "../../providers/Habits";

const HabitsCard = ({ habit }) => {
  const {
    id,
    title,
    category,
    difficulty,
    frequency,
    achieved,
    how_much_achieved,
  } = habit;

  const { deleteHabit, updateHabit } = useHabits();

  return (
    <HabitsCardContainer>
      <Background />
      <HabitsCardContent>
        <HabitsCardHeaderContainer>
          <strong>{frequency}</strong>
          <p>{difficulty}</p>
        </HabitsCardHeaderContainer>
        <HabitsCardTitleContainer>
          <h4>{title}</h4>
        </HabitsCardTitleContainer>
        <HabitsCardInfoContainer>
          <p>{category}</p>
        </HabitsCardInfoContainer>
        <HabitsCardFooterContainer>
          <ProgressContainer>
            <ProgressBar how_much_achieved={how_much_achieved} />
          </ProgressContainer>

          <button onClick={() => deleteHabit(id)}>
            <FiTrash2 size={23} color={"var(--red)"} />
          </button>
          {achieved ? (
            <UpdateButton disabled>
              <FiCheckCircle size={23} color={"var(--medium-gray)"} />
            </UpdateButton>
          ) : (
            <UpdateButton
              onClick={() => updateHabit(id, how_much_achieved, frequency)}
            >
              <FiCheckCircle size={23} color={"var(--light-green)"} />
            </UpdateButton>
          )}
        </HabitsCardFooterContainer>
      </HabitsCardContent>
    </HabitsCardContainer>
  );
};

export default HabitsCard;
