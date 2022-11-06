import RobotCard from "./components/RobotCard/RobotCard";
import useApi from "./hooks/useApi";

const App = () => {
  const { getRobots } = useApi();

  getRobots();

  return <div>Quiero irme a casa</div>;
};

export default App;
