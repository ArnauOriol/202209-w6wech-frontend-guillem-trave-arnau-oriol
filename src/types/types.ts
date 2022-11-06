export interface RobotsState {
  list: Robot[];
}

export interface Robot {
  name: string;
  image: string;
  stats: Stats;
}

interface Stats {
  speed: number;
  strength: number;
  createdAt: Date;
}
