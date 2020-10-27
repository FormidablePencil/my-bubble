import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { SET_FLEX_DIR_OF_CONTENT_DETAILS } from "../actions/types"

const useToggleGridDirection = () => {
  const dispatch = useDispatch()

  const toggleGridDirection = () => {
    if (window.innerWidth < 1300)
      dispatch({ type: SET_FLEX_DIR_OF_CONTENT_DETAILS, payload: false })
    else
      dispatch({ type: SET_FLEX_DIR_OF_CONTENT_DETAILS, payload: true })
  }

  useEffect(() => {
    toggleGridDirection()
    window.addEventListener('resize', toggleGridDirection)
    return () => window.removeEventListener('resize', toggleGridDirection)
  }, [])

}

export default useToggleGridDirection
