import { useRef } from "react";
import useResizeObserver from "use-resize-observer";

const A = () => {
  const ref = useRef(null);
  useResizeObserver({
    ref: ref,
    resize: function ({ width }) {
      console.log(width);
    }
  })
  return <div ref={ref}>This is Component A.</div>;
};

export default A;
