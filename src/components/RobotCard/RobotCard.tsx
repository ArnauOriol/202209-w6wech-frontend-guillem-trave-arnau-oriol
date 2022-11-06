import { Robot } from "../../types/types";
import RobotCardStyled from "./RobotCardStyled";

interface RobotCardProps {
  robot: Robot;
}

const RobotCard = ({ robot }: RobotCardProps): JSX.Element => {
  const {
    name,
    image,
    stats: { speed, strength, createdAt },
  } = robot;

  return (
    <RobotCardStyled>
      <div className="robot__wrapper">
        <h2 className="robot__name">{name}</h2>
        <img src={image} alt={`the robot ${name}`} className="robot__image" />
      </div>
      <ul className="robot__stats-wrapper">
        <li className="robot__speed">
          <span className="bold">speed:</span> {speed}
        </li>
        <li className="robot__strength">
          <span className="bold">strength:</span> {strength}
        </li>
        <li className="robot__date">
          <span className="bold">created at:</span> {createdAt}
        </li>
      </ul>
    </RobotCardStyled>
  );
};

export default RobotCard;
