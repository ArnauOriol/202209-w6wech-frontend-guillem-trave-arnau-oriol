import { useEffect } from "react";
import RobotCard from "./components/RobotCard/RobotCard";
import useApi from "./hooks/useApi";
import { useAppSelector } from "./redux/hooks";

const App = () => {
  const { getRobots } = useApi();
  const robots = useAppSelector((state) => state.robots.list);

  useEffect(() => {
    getRobots();
  }, []);

  return (
    <div>
      <ul>
        {robots.map((robot) => (
                <RobotCard robot={robot} key={robot._id} />
                ))}
      </ul>
    </div>
  );
};

export default App;
