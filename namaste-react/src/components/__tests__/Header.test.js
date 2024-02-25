import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

it("Should load Header Component with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  // find the button with specific name
  const loginButton = screen.getByRole("button", { name: "LogIn" });
  // const loginButton = screen.getByText("LogIn");
  expect(loginButton).toBeInTheDocument();
});

it("Should load Header Component with cart 0-items", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  // find the button with specific name
  const cartItems = screen.getByText("Cart ( 0 - items)");
  // const loginButton = screen.getByText("LogIn");
  expect(cartItems).toBeInTheDocument();
});

it("Should load Header Component with cart ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  // find the button with specific name
  const cartItems = screen.getByText(/Cart/);
  // const loginButton = screen.getByText("LogIn");
  expect(cartItems).toBeInTheDocument();
});

it("Should Change LogIn Button to LogOut OnClick", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "LogIn" });
  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole("button", { name: "LogOut" });
  expect(logoutButton).toBeInTheDocument();
});
