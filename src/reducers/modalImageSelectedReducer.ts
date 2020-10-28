import { MODAL_IMAGE_SELECTED } from "../actions/types"

const initialState = 0

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case MODAL_IMAGE_SELECTED:
    return payload

  default:
    return state
  }
}
