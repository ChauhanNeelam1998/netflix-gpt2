import { act } from "react-dom/test-utils";
import ResturantMenu from "../ResturantMenu";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import Cart from "../Cart";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should Load Resturant Menu Component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <ResturantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );
  const accordionHeader = screen.getByText("Veg Pizza (14)");
  fireEvent.click(accordionHeader);
  const foodItemsCard = screen.getAllByTestId("items");
  expect(foodItemsCard.length).toBe(14);

  expect(screen.getByText("Cart ( 0 - items)")).toBeInTheDocument();

  const addButton = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addButton[0]);
  const cartItem = screen.getByText("Cart ( 1 - items)");
  expect(cartItem).toBeInTheDocument();

  fireEvent.click(addButton[1]);
  expect(screen.getByText("Cart ( 2 - items)")).toBeInTheDocument();

  expect(screen.getAllByTestId("items").length).toBe(16);

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));
  expect(screen.getAllByTestId("items").length).toBe(14);

  expect(
    screen.getByText("Cart is empty! Please Add the item")
  ).toBeInTheDocument();
});
