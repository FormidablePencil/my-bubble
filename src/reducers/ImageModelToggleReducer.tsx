import { TOGGLE_IMAGE_MODAL } from "../actions/types"

const initialState = false

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case TOGGLE_IMAGE_MODAL:
      return !state

    default:
      return state
  }
}
