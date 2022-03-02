import { useEffect } from "react";
import { bControl } from "../components/ResizerControl";
import { ResizerControlType } from "../components";

function useResizer(ref: React.RefObject<HTMLDivElement>) {
  useEffect(() => {
    let type: ResizerControlType | undefined = undefined;
    let x = 0;
    let y = 0;

    function handleMove(e: MouseEvent) {
      const isR = type === ResizerControlType.RIGHT;
      const isRB = type === ResizerControlType.RIGHT_BOTTOM;
      const isB = type === ResizerControlType.BOTTOM;

      const dx = isR || isRB ? e.clientX - x : 0;
      const dy = isB || isRB ? e.clientY - y : 0;

      if (ref.current) {
        const styles = window.getComputedStyle(ref.current);
        const newWidth = parseInt(styles.width, 10) + dx;
        const newHeight = parseInt(styles.height, 10) + dy;

        x = x + dx;
        y = y + dy;

        ref.current.style.width = `${newWidth}px`;
        ref.current.style.height = `${newHeight}px`;
      }
    }

    function handleUp() {
      type = undefined;
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseup", handleUp);
    }

    function handleDown(e: MouseEvent) {
      type = (e.target as any).id;
      x = e.clientX;
      y = e.clientY;

      if (ref.current) {
        document.addEventListener("mousemove", handleMove);
        document.addEventListener("mouseup", handleUp);
      }
    }

    if (ref.current) {
      const ctrls = ref.current.querySelectorAll(`.${bControl()}`);
      ctrls.forEach((ctrl) =>
        ctrl.addEventListener("mousedown", handleDown as EventListener)
      );
    }
  }, [ref]);
}

export default useResizer;
