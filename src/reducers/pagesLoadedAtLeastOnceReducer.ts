import { UPDATE_CONTACT_PAGE_RENDER, UPDATE_PROJECTS_PAGE_RENDER, UPDATE_TECH_PAGE_RENDER } from "../actions/types"

export interface pagesLoadedAtLeastOnceT {
  contact: boolean,
  tech: boolean,
  projects: boolean,
}
const initialState: pagesLoadedAtLeastOnceT = {
  contact: false,
  tech: false,
  projects: false,
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case UPDATE_CONTACT_PAGE_RENDER:
      return { ...state, contact: true }
    case UPDATE_TECH_PAGE_RENDER:
      return { ...state, tech: true }
    case UPDATE_PROJECTS_PAGE_RENDER:
      return { ...state, projects: true }

    default:
      return state
  }
}
