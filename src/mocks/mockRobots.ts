import { Robot } from "../types/types";

const mockRobots: Robot[] = [
  {
    stats: {
      speed: 1,
      strength: 10,
      createdAt: new Date(),
    },
    _id: "636563d18d7ffccdc807e73d",
    name: "machacatuercas",
    image: "https//robot.png",
  },
  {
    stats: {
      speed: 5,
      strength: 2,
      createdAt: new Date(),
    },
    _id: "636563d18d7ffccdc807e73f",
    name: "bender",
    image: "https//robotito.png",
  },
];

export default mockRobots;
