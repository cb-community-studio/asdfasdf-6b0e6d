import React from "react";
import { render, screen } from "@testing-library/react";

import AsdadsfEditDialogComponent from "../AsdadsfEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders asdadsf edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <AsdadsfEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("asdadsf-edit-dialog-component")).toBeInTheDocument();
});
