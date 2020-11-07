import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { SET_FLEX_DIR_OF_CONTENT_DETAILS } from "../actions/types"

const useToggleGridDirection = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const resizeEventHandler = () => {
      dispatch(updateFlexDirOfContent())
    }
    resizeEventHandler()
    window.addEventListener('resize', resizeEventHandler)
    return () => window.removeEventListener('resize', resizeEventHandler)
  })
}

const updateFlexDirOfContent = () => dispatch => {
  if (window.innerWidth < 1300)
    dispatch({ type: SET_FLEX_DIR_OF_CONTENT_DETAILS, payload: false })
  else
    dispatch({ type: SET_FLEX_DIR_OF_CONTENT_DETAILS, payload: true })
}

export default useToggleGridDirection