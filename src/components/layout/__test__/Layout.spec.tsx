import {render, RenderResult} from "@testing-library/react";
import Layout from "../Layout";
import * as React from "react";

let documentBody: RenderResult;
describe('<Layout />', () => {
    beforeEach(() => {

    });
    it('should Render with Header and Footer', () => {
        documentBody = render(
            <Layout>
                <p>Dummy</p>
            </Layout>
        );
        expect(documentBody.getByText("Drawing Canvas 😊")).toBeDefined();
        expect(documentBody.getByText("Dummy")).toBeDefined();
        expect(documentBody.getByText("Rodolfo Andrés Ramírez Valenzuela")).toBeDefined();
    });
});
