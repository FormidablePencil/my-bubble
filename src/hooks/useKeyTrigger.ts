import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { CLOSE_CONTENT_DETAILS_SECTION } from "../actions/types"

const useKeyTrigger = () => {
  const dispatch = useDispatch()

  const pressedOnKey = (e) =>
    e.key === 'Escape' && dispatch({ type: CLOSE_CONTENT_DETAILS_SECTION })

  useEffect(() => {
    window.addEventListener('keydown', pressedOnKey)
    return () => window.removeEventListener('keydown', pressedOnKey)
  }, [])
}

export default useKeyTrigger
