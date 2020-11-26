import { NEXT_PROJECT, PREV_PROJECT, SELECTED_PROJECT } from "../actions/types"


export type currentlyViewingT = number  //This will be id of object

const initialState = 0

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case SELECTED_PROJECT:
      return payload

    case NEXT_PROJECT:
      return state + 1

    case PREV_PROJECT:
      return state - 1

    default:
      return state
  }
}
