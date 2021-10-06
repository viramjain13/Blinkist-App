import React from "react";
import ReactDOM from "react-dom";
import LogoutButton from "./LogoutButton";
import {  cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { useAuth0 } from "@auth0/auth0-react";
jest.mock("@auth0/auth0-react",()=>{

    return {useAuth0:jest.fn()}
});
afterEach(cleanup);
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<LogoutButton />, div);
});

afterEach(cleanup);
it("if isAuthenticated is true then login is not displayed", () => {
const div = document.createElement("div");
ReactDOM.render(<LogoutButton />, div);
})