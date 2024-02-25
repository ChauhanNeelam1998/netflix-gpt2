import { fireEvent, render, screen } from "@testing-library/react";
import ResturantCard, { withPromotedLabel } from "../ResturantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("Should render the ResturantCard component with props Data", () => {
  render(<ResturantCard resData={MOCK_DATA} />);
  const name = screen.getByText("Pizza Hut");
  expect(name).toBeInTheDocument();
});

it("Should render the ResturantCard component with Promoted Label", () => {
  //   render(withPromotedLabel(ResturantCard));
  //   console.log(withPromotedLabel(ResturantCard));
  //   fireEvent.call
  // const label = screen.get;
  //   expect(label).toBeInTheDocument();
});
