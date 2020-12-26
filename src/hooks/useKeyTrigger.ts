import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { CLOSE_CONTENT_DETAILS_SECTION } from "../actions/types"

const useKeyTrigger = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const pressedOnKey = (e) =>
      e.key === 'Escape' && dispatch({ type: CLOSE_CONTENT_DETAILS_SECTION })
    window.addEventListener('keydown', pressedOnKey)
    return () => window.removeEventListener('keydown', pressedOnKey)
  }, [dispatch])
}

export default useKeyTrigger
