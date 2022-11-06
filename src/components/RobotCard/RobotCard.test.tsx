import { render, screen } from "@testing-library/react";
import RobotCard from "./RobotCard";

describe("Given a RobotCard component", () => {
  describe("When its rendered whit the robot 'Coso'", () => {
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

    test("Then it should show a heading of level 2 with 'Coso'", () => {
      render(<RobotCard robot={robotCoso} />);
      const heading = screen.queryByRole("heading", {
        level: 2,
        name: robotCoso.name,
      });

      expect(heading).toBeInTheDocument();
    });

    test("Then it should show an image with the alt: 'the robot Coso'", () => {
      render(<RobotCard robot={robotCoso} />);
      const robotImage = screen.queryByAltText(`the robot ${robotCoso.name}`);

      expect(robotImage).toBeInTheDocument();
    });
  });
});
