import { SELECTED_SUBJECT } from "../actions/types"


export type currentlyViewingT = number  //This will be id of object

const initialState = 3

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case SELECTED_SUBJECT:
      return payload

    default:
      return state
  }
}
