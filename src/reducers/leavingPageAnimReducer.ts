import { TRANSITION_IN_PAGE, TRANSITION_OUT_PAGE } from "../actions/types"

const initialState = false

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case TRANSITION_OUT_PAGE:
      return true
    case TRANSITION_IN_PAGE:
      return false

    default:
      return state
  }
}
