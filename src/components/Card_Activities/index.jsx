import {
  Background,
  CardActivitiesContainer,
  CardActivitiesContent,
  CardActivitiesInfoContainer,
  CardActivitiesTitleContainer,
} from "./cardAcitivities.style";
import card_light from "../../assets/light_card.svg";
import { FiTrash2 } from "react-icons/fi";

export default function CardActivities() {
  return (
    <CardActivitiesContainer>
      <Background>
        <img src={card_light} alt="" />
      </Background>
      <CardActivitiesContent>
        <CardActivitiesTitleContainer>
          <h4>Activitie name</h4>
          <button>
            <FiTrash2 size={23} />
          </button>
        </CardActivitiesTitleContainer>
        <CardActivitiesInfoContainer>
          <div>
            <h4>Day</h4>
            <p>00/00/00</p>
          </div>
          <div>
            <h4>Time</h4>
            <p>00:00</p>
          </div>
        </CardActivitiesInfoContainer>
      </CardActivitiesContent>
    </CardActivitiesContainer>
  );
}
