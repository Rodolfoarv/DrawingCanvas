//@ts-nocheck
import React from 'react';
import { render } from '@testing-library/react';
import useStore from "../../hooks/useStore";
import {CanvasBoard} from "../CanvasBoard";
import {dummyFill, dummyShape} from "../../store/global";
import '@testing-library/jest-dom';

jest.mock("../../hooks/useStore");

test('renders learn react link', () => {
  useStore.mockReturnValue({
    addShape: (props:any) =>{ },
    width: 0,
    height: 0,
    shapes: [dummyShape],
    fillValues: [dummyFill]
  });

  render(<CanvasBoard command={""}/>);
  expect(useStore).toHaveBeenCalled();
});
