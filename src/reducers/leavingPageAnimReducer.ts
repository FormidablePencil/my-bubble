import { TRANSITION_PAGE } from "../actions/types"

export type leavingPageAnimT = { leavingFromPage: boolean, prevLocation: string, nextLocation: string }
const initialState = { leavingFromPage: false, prevLocation: '', nextLocation: '' }

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case TRANSITION_PAGE:
      return payload

    default:
      return state
  }
}
