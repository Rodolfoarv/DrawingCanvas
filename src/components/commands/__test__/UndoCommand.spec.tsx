
import {render, RenderResult} from "@testing-library/react";
import React from "react";
import {CanvasBoard} from "../../../screens/CanvasBoard";
import {RectangleCommand} from "../RectangleCommand";
import '@testing-library/jest-dom';
import {UndoCommand} from "../UndoCommand";
import {LineCommand} from "../LineCommand";
import { screen } from '@testing-library/dom'

let documentBody: RenderResult;
describe("Undo", () => {

    it('Should render a Invalid Command if canvas doesnt exist', () => {

        documentBody = render(
            <UndoCommand command={["U","L", "1", "1", "1","2"]}/>
        );
        var linkElement = documentBody.getByLabelText("error");
        expect(linkElement).toBeInTheDocument();
    });
})





