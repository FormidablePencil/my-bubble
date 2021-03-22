import React from "react";
import { useSelector } from "react-redux";
import { rootReducerT } from "../../store";
import rose from "../../assets/rose.png";

interface T {
  children;
  overRideClassName?: string;
  compHere?: any;
  onRender?: boolean;
  onRenderDelay?: number;
}
const TransitionalAnim = ({ children, overRideClassName, compHere }: T) => {
  const leavingFromPage = useSelector(
    (state: rootReducerT) => state.leavingPageAnim.leavingFromPage
  );

  return (
    <div style={{ height: "100%" }}>
      {compHere}
      <div
        style={{ height: "100%" }}
        className={`
        ${leavingFromPage ? "page-trans-out" : "page-trans-in"} 
        ${overRideClassName}
        `}
      >
        {children}
      </div>
    </div>
  );
};

export const RoseComp = () => {
  const { leavingFromPage, nextLocation } = useSelector(
    (state: rootReducerT) => state.leavingPageAnim
  );

  return (
    <div className="elementBetweenPgTrans">
      <img
        className={`
        ${
          leavingFromPage && nextLocation === "/"
            ? "opacityNone"
            : "opacityFull"
        }
      `}
        src={rose}
        alt="rose"
      />
    </div>
  );
};

export default TransitionalAnim;
