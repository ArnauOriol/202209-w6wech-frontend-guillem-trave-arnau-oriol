import useApi from "./hooks/useApi";

const App = () => {
  const { getRobots } = useApi();

  getRobots();

  return <p>hola</p>;
};

export default App;
