import RobotCard from "./components/RobotCard/RobotCard";
import useApi from "./hooks/useApi";

const App = () => {
  const { getRobots } = useApi();

  getRobots();

  return (
    <div>
      <RobotCard />
    </div>
  );
};

export default App;
