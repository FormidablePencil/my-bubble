import { FETCHED_ALL_PROJECT_DATA } from "../actions/types"

export interface projectDataT {
  logo: string
  title: string
  subtitle: string
  description: string
  codeLines: string
  links: {
    client?: string
    server?: string
    cms?: string
    blog?: string
  }
  status: number
  technologies: []
  type: string
  _id: number
  showInPortfolio: boolean
  images: {
    [index: number]: {
      url: string
      device: string
    }
    filter?: any
    map?: any
    length?: any
  }
  video: string
}
const initialState = []

export default (state: projectDataT[] = initialState, { type, payload }) => {
  switch (type) {

    case FETCHED_ALL_PROJECT_DATA:
      return payload

    default:
      return state
  }
}
