import React from "react";
import { render, screen } from "@testing-library/react";

import AsdadsfCreateDialogComponent from "../AsdadsfCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders asdadsf create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <AsdadsfCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("asdadsf-create-dialog-component")).toBeInTheDocument();
});
