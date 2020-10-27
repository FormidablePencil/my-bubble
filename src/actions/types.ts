export const FETCHED_ALL_PROJECT_DATA = 'FETCHED_ALL_PROJECT_DATA'
export const FETCHED_ALL_TECH_DATA = 'FETCHED_ALL_TECH_DATA'
export const SELECTED_PROJECT = 'SELECTED_PROJECT'
export const SELECTED_TECH = 'SELECTED_TECH'
export const SELECTED_SUBJECT = 'SELECTED_SUBJECT'

export const OPEN_CONTENT_DETAILS = 'OPEN_CONTENT_DETAILS'
export const CLOSE_CONTENT_DETAILS = 'CLOSE_CONTENT_DETAILS'
export const SET_FLEX_DIR_OF_CONTENT_DETAILS = 'SET_FLEX_DIR_OF_CONTENT_DETAILS'
export const TOGGLE_IMAGE_MODAL = 'TOGGLE_IMAGE_MODAL'
export const TOGGLE_CONTENT_DETAILS_SECTION = 'TOGGLE_CONTENT_DETAILS_SECTION'
export const CLOSE_CONTENT_DETAILS_SECTION = 'CLOSE_CONTENT_DETAILS_SECTION'

export interface sortedProjectDataT {
  status: number
  general: {
    title: string
    description: string
    type: string
  }
  links: {
    frontend: string
    server: string
    relevant: {}
    blog: string
  },
  technologies: []
}