import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import { TRANSITION_IN_PAGE, TRANSITION_OUT_PAGE } from "../actions/types"

const useNavigateWithAnim = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const onClickNavigateWithAnim = (path) => {
    dispatch({ type: TRANSITION_OUT_PAGE })

    setTimeout(() => {
      history.push(path)
      dispatch({ type: TRANSITION_IN_PAGE })
    }, 300);

  }

  return onClickNavigateWithAnim
}

export default useNavigateWithAnim
