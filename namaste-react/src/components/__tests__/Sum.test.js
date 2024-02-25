import { Sum } from "../Sum";
test("Sum function should calculate the sum of two number", () => {
  const result = Sum(3, 4);
  //Assertion
  expect(result).toBe(7); // itis not maindetory
});
