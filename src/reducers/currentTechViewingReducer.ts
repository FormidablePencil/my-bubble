import { SELECTED_TECH } from "../actions/types"

const initialState = 1

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case SELECTED_TECH:
      return payload

    default:
      return state
  }
}
