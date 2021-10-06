import React from "react";
import HomeSearch from "./HomeSearch";
import { render, cleanup ,fireEvent} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { isJSDocSeeTag } from "typescript";

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


afterEach(cleanup);
it('test the placeholder in input', () => {
    const {getByPlaceholderText} = render(<HomeSearch onChange={jest.fn()}/>);
    
  getByPlaceholderText('Search by title or author');

});

