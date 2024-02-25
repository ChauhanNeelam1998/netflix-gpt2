import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

// test("Should  load  Contact Us page", () => {
//   render(<Contact />);
//   const heading = screen.getByRole("heading");
//   expect(heading).toBeInTheDocument();
// });

// test("Should  load  button inside Contact Component", () => {
//   render(<Contact />);
//   const button = screen.getByRole("button");
//   expect(button).toBeInTheDocument();
// });

// test("Should  load  button inside Contact Component using getByText", () => {
//   render(<Contact />);
//   const button = screen.getByText("Submit");
//   expect(button).toBeInTheDocument();
// });

// test("Should  load  input inside Contact Component using getByPlaceholderText", () => {
//   render(<Contact />);
//   const input = screen.getByPlaceholderText("name");
//   expect(input).toBeInTheDocument();
// });

// test("Should load 2 input boxes on the Contact Component", () => {
//   render(<Contact />);
//   //Querying
//   const inputBoxes = screen.getAllByRole("textbox");
//   //console.log(inputBoxes.length);
//   expect(inputBoxes.length).not.toBe(3);
// });

//Grouping test cases

describe("Contact Us page Test Case", () => {
  // beforeAll(() => {
  //   console.log("Before All case");
  // }); // used in log,cleanup task
  // beforeEach(() => {
  //   console.log("Before Each");
  // });

  // afterAll(() => {
  //   console.log("After all");
  // });

  // afterEach(() => {
  //   console.log("After Each");
  // });
  //we can write test OR it
  it("Should  load  Contact Us page", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  it("Should  load  button inside Contact Component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("Should  load  button inside Contact Component using getByText", () => {
    render(<Contact />);
    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
  });

  it("Should  load  input inside Contact Component using getByPlaceholderText", () => {
    render(<Contact />);
    const input = screen.getByPlaceholderText("name");
    expect(input).toBeInTheDocument();
  });

  it("Should load 2 input boxes on the Contact Component", () => {
    render(<Contact />);
    //Querying
    const inputBoxes = screen.getAllByRole("textbox");
    //console.log(inputBoxes.length);
    expect(inputBoxes.length).not.toBe(3);
  });
});
