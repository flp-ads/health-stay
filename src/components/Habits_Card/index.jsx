import {
  Background,
  HabitsCardContainer,
  HabitsCardContent,
  HabitsCardHeaderContainer,
  HabitsCardInfoContainer,
  HabitsCardTitleContainer,
  HabitsCardFooterContainer,
} from "./styles";

import { FiTrash2, FiCheckCircle } from "react-icons/fi";

const HabitsCard = () => {
  return (
    <HabitsCardContainer>
      <Background />
      <HabitsCardContent>
        <HabitsCardHeaderContainer>
          <strong>Frequency</strong>
          <p>Difficulty</p>
        </HabitsCardHeaderContainer>
        <HabitsCardTitleContainer>
          <h4>Habit name</h4>
        </HabitsCardTitleContainer>
        <HabitsCardInfoContainer>
          <p>Category</p>
        </HabitsCardInfoContainer>
        <HabitsCardFooterContainer>
          <button deleted="deleted">
            <FiTrash2 size={23} color={"var(--red)"} />
          </button>

          <button>
            <FiCheckCircle size={23} />
          </button>
        </HabitsCardFooterContainer>
      </HabitsCardContent>
    </HabitsCardContainer>
  );
};

export default HabitsCard;
