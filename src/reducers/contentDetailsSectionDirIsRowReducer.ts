import { SET_FLEX_DIR_OF_CONTENT_DETAILS } from "../actions/types"

const initialState: boolean = true

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case SET_FLEX_DIR_OF_CONTENT_DETAILS:
      return payload

    default:
      return state
  }
}
