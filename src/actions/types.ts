export const FETCHED_ALL_PROJECT_DATA = 'FETCHED_ALL_PROJECT_DATA'
export const FETCHED_ALL_TECH_DATA = 'FETCHED_ALL_TECH_DATA'
export const SELECTED_PROJECT = 'SELECTED_PROJECT'
export const SELECTED_TECH = 'SELECTED_TECH'
export const SELECTED_SUBJECT = 'SELECTED_SUBJECT'

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