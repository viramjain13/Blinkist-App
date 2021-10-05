import React from "react";
import ReactDOM from "react-dom";
import Button from "./ButtonComponent";
import {  cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
afterEach(cleanup);
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Button />, div);
});

// it("renders button correctly", () => {
//   const { getAllByTestId } = render(<Button title={"button"} />);

//   // expect(getByTitle).toBe("button");
//   expect(getAllByTestId("button")).toHaveTextContent("button");
//   // expect(getAllByTestId("button").title).toBe('button');
// });
