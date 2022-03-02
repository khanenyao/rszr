import { render, screen } from "@testing-library/react";
import React from "react";
import { ResizerControl, ResizerControlType } from "../../ResizerControl";

describe("ResizerControl", () => {
  test("component render test", () => {
    const position = ResizerControlType.RIGHT;
    render(<ResizerControl position={position} />);

    const controlEl = screen.getByRole("control");

    const isControlExist = !!controlEl;
    const isControlTypeCorrect =
      controlEl.className === "rszr__ctrl rszr__ctrl--right";

    expect(isControlExist).toEqual(true);
    expect(isControlTypeCorrect).toEqual(true);
  });

  test("component visibility test", () => {
    const position = ResizerControlType.RIGHT;
    const hidden = true;

    render(<ResizerControl position={position} hidden={hidden} />);

    const controlEl = screen.getByRole("control");
    const isControlHidden =
      controlEl.className === "rszr__ctrl rszr__ctrl--right rszr__is-hidden";

    expect(isControlHidden).toEqual(hidden);
  });
});
