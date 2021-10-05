import React from "react";
import TextField from "./TextField";
import { render, cleanup ,fireEvent} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
afterEach(cleanup);
it('test the placeholder in input', () => {
    const {getByPlaceholderText} = render(<TextField name='Test'/>);
    
  getByPlaceholderText('Test');

});

describe('checking the textfield', () => {
    const handleChange = jest.fn();
it('Checking the input value',() => {

    const {container} = render(<TextField
        onChange={handleChange} value={''}/>);
        const input:any = container.querySelector("input");
        fireEvent.change(input, {target: {value: 'value'}});
        expect(handleChange).toHaveBeenCalledTimes(1);
    });
});