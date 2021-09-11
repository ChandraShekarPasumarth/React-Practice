import React from 'react';
import ReactDOM from 'react-dom'
import {render } from '@testing-library/react'
import {jest-dom/extend-expect} from '@testing-library/jest-dom'

import Button from './Button'
import { isTSAnyKeyword } from '@babel/types';

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Button></Button>,div)
})

it("renders button correctly", () =>{
    const {getByTestId} = render(<Button label="Click me"></Button>)
   expect(getByTestId('button')).toHaveTextContent("Click me")

})