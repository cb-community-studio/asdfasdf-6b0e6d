import React from "react";
import { render, screen } from "@testing-library/react";

import AsdadsfPage from "../AsdadsfPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders asdadsf page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <AsdadsfPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("asdadsf-datatable")).toBeInTheDocument();
    expect(screen.getByRole("asdadsf-add-button")).toBeInTheDocument();
});
