import React from "react";
import HomeSearch from "./HomeSearch";
import { render, cleanup ,fireEvent} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);
describe('checking the home search', () => {
    const handleChange = jest.fn();
it('Checking the search',() => {

    const {container} = render(<HomeSearch
        onChange={handleChange} value={''}/>);
        const input:any = container.querySelector("input");
        fireEvent.change(input, {target: {value: 'value'}});
        expect(handleChange).toHaveBeenCalledTimes(1);
    });
});