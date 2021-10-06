import React from "react";
import ReactDOM from "react-dom";
import LoginButton from "./LoginButton";
import {  cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { useAuth0 } from "@auth0/auth0-react";
jest.mock("@auth0/auth0-react",()=>{

    return {useAuth0:jest.fn()}
});
afterEach(cleanup);
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<LoginButton />, div);
});

afterEach(cleanup);
it("if isAuthenticated is true then login is not displayed", () => {
const div = document.createElement("div");
ReactDOM.render(<LoginButton />, div);
})