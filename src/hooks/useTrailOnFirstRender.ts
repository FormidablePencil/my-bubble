import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { config, useTrail } from "react-spring";
import { UPDATE_PROJECTS_PAGE_RENDER, UPDATE_TECH_PAGE_RENDER } from "../actions/types";

const useTrailOnFirstRender = ({ pageRendered, trailLength, trailDelay }) => {
  const dispatch = useDispatch()
  const [trail, set] = useTrail(trailLength, () => ({
    opacity: !pageRendered ? 0 : 1,
    config: config.gentle,
  }))

  useEffect(() => {
    if (!pageRendered)
      setTimeout(() => {
        set({ opacity: 1 })
        dispatch({ type: UPDATE_TECH_PAGE_RENDER })
        dispatch({ type: UPDATE_PROJECTS_PAGE_RENDER })
      }, trailDelay);
  }, [pageRendered, set, dispatch, trailDelay])

  return trail
}

export default useTrailOnFirstRender

// scroll and backward delete
