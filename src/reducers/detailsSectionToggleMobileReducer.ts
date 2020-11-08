import { TOGGLE_DETAILS_SECTION_MOBILE } from "../actions/types"

const initialState = false

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case TOGGLE_DETAILS_SECTION_MOBILE:
    return !state

  default:
    return state
  }
}
