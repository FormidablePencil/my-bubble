import { CLOSE_CONTENT_DETAILS_SECTION, TOGGLE_CONTENT_DETAILS_SECTION } from "../actions/types"

const initialState = true

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case TOGGLE_CONTENT_DETAILS_SECTION:
      return !state

    case CLOSE_CONTENT_DETAILS_SECTION:
      return true
      
    default:
      return state
  }
}
