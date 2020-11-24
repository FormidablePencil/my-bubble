import { useDispatch } from "react-redux"
import { useHistory, useLocation } from "react-router-dom"
import { TRANSITION_PAGE } from "../actions/types"

const useNavigateWithAnim = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const location = useLocation()

  const onClickNavigateWithAnim = (path) => {
    dispatch({
      type: TRANSITION_PAGE,
      payload: { leavingFromPage: true, prevLocation: location, nextLocation: path }
    })

    setTimeout(() => {
      history.push(path)
      setTimeout(() => {
        dispatch({
          type: TRANSITION_PAGE,
          payload: { leavingFromPage: false, prevLocation: location, nextLocation: path }
        })
      }, 300)
    }, 100);

  }

  return onClickNavigateWithAnim
}

export default useNavigateWithAnim
