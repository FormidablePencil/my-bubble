import { FETCHED_ALL_PROJECT_DATA } from "../actions/types"
// ^3.9.7
export interface projectDataT {
  title: string
  description: string
  gitRepo: {
    frontend: string
    server: string
  }
  relevant: {
    webApp: string
    blog: string
  }
  status: number
  technologies: []
  type: string
  _id: number
  showInPorfolio: boolean
  images: {
    [index: number]: string
    //fuction
    map?: any
    length?: any
  }
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
