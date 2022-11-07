import { render, screen } from "@testing-library/react";
import RobotCardList from "./RobotCardList";
import mockWrapper from "../../mocks/mockWrapper";

describe("Given a RobotCardList component", () => {
  describe("When its rendered", () => {
    test("Then it should show 1 heading of level 1 that says 'ROBOTS'", () => {
      render(<RobotCardList />, { wrapper: mockWrapper });
      const headingTitle = screen.queryByRole("heading", { level: 1 });

      expect(headingTitle).toBeInTheDocument();
    });
  });
});
