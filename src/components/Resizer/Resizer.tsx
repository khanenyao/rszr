import React, { useRef } from "react";
import { block } from "../../helpers/styles";
import useResizer from "../../helpers/useResizer";
import { ResizerControl, ResizerControlType } from "../ResizerControl";
import "./Resizer.scss";

export interface IResizerProps {
  controls?: ResizerControlType[];
}

const b = block("root");
const rootClassName = b();
const containerClassName = b("container").toString();

const Resizer: React.FC<IResizerProps> = ({
  controls = [
    ResizerControlType.RIGHT,
    ResizerControlType.RIGHT_BOTTOM,
    ResizerControlType.BOTTOM,
  ],
  children,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  useResizer(ref);

  return (
    <div ref={ref} className={rootClassName}>
      <div role="container" className={containerClassName}>
        <ResizerControl
          position={ResizerControlType.RIGHT}
          hidden={!controls.includes(ResizerControlType.RIGHT)}
        />
        <ResizerControl
          position={ResizerControlType.RIGHT_BOTTOM}
          hidden={!controls.includes(ResizerControlType.RIGHT_BOTTOM)}
        />
        <ResizerControl
          position={ResizerControlType.BOTTOM}
          hidden={!controls.includes(ResizerControlType.BOTTOM)}
        />
        {children}
      </div>
    </div>
  );
};

export default Resizer;
