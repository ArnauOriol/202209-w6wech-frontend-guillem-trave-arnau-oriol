import RobotCard from "./components/RobotCard/RobotCard";
import useApi from "./hooks/useApi";

const App = () => {
  const { getRobots } = useApi();

  getRobots();

  const robotCoso = {
    _id: "nooosheraaardparaaaanoooo",
    name: "Coso",
    image: "https://robotcoso.png",
    stats: {
      speed: 3,
      strength: 6,
      createdAt: "66/66/6666",
    },
  };

  return (
    <div>
      <RobotCard robot={robotCoso} />
    </div>
  );
};

export default App;
