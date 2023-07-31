import { FETCHED_ALL_TECH_DATA } from "../actions/types"

export interface techDataT {
  technology: string
  description?: string
  _id: string
  image: string
}

const initialState: techDataT[] = [
  {
    _id: "0",
    technology: "",
    image: ""
  }
]

export default (state: techDataT[] = initialState, { type, payload }) => {
  switch (type) {

    case FETCHED_ALL_TECH_DATA:
      return payload

    default:
      return state
  }
}
