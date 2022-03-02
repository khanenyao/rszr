import { render, screen } from "@testing-library/react";
import React from "react";
import { Resizer, ResizerControlType } from "../../";

describe("Resizer", () => {
  test("component render test", () => {
    const text = "TEST";
    render(<Resizer>{text}</Resizer>);

    const isContainerExist = !!screen.getByRole("container");
    const isChildrenRendered = !!screen.getByText(text);
    const countOfControls = (screen.getAllByRole("control") ?? []).length;
    const correctCountOfControls = 3;

    expect(isContainerExist).toEqual(true);
    expect(isChildrenRendered).toEqual(true);
    expect(countOfControls).toEqual(correctCountOfControls);
  });

  test("component controls management test", () => {
    const controls = [ResizerControlType.BOTTOM, ResizerControlType.BOTTOM];
    render(<Resizer controls={controls}>TEST</Resizer>);

    const countOfHiddenControls = (
      document.getElementsByClassName("rszr__ctrl rszr__is-hidden") ?? []
    ).length;

    const correctCountOfHiddenControls = 2;

    expect(countOfHiddenControls).toEqual(correctCountOfHiddenControls);
  });
});
