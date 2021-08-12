import {
  Background,
  CardActivitiesContainer,
  CardActivitiesContent,
  CardActivitiesInfoContainer,
  CardActivitiesTitleContainer,
} from "./style";

import { FiTrash2 } from "react-icons/fi";

export default function CardActivities() {
  return (
    <CardActivitiesContainer>
      <Background />
      <CardActivitiesContent>
        <CardActivitiesTitleContainer>
          <h3>Activitie name</h3>
          <button>
            <FiTrash2 size={23} />
          </button>
        </CardActivitiesTitleContainer>
        <CardActivitiesInfoContainer>
          <div>
            <h3>Day</h3>
            <p>00/00/00</p>
          </div>
          <div>
            <h3>Time</h3>
            <p>00:00</p>
          </div>
        </CardActivitiesInfoContainer>
      </CardActivitiesContent>
    </CardActivitiesContainer>
  );
}
