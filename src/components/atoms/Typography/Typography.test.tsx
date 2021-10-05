import React from 'react';
import {  render} from '@testing-library/react';
import Typography from './Typography';

describe('Testing the title',()=>{
    it("checking the title",()=>{
        const {getByTestId} = render(<Typography children='React'/>);
        expect(getByTestId('3').textContent).toBe('React');
    });
});