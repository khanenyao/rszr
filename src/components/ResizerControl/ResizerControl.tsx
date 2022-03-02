import React, { useMemo } from "react";
import { block } from "../../helpers/styles";
import "./ResizerControl.scss";

export enum ResizerControlType {
  RIGHT = "right",
  RIGHT_BOTTOM = "right-bottom",
  BOTTOM = "bottom",
}

interface ResizerControlProps {
  hidden?: boolean;
}

interface ResizerBaseControlProps extends ResizerControlProps {
  position: ResizerControlType;
}

export const b = block("ctrl");

const ResizerControl: React.FC<ResizerBaseControlProps> = ({
  position,
  hidden,
}) => {
  const ctrlClassName = useMemo(
    () =>
      b({ [position]: true })
        .state({ hidden: !!hidden })
        .toString(),
    [position, hidden]
  );

  return <div role="control" id={position} className={ctrlClassName} />;
};

export default ResizerControl;
