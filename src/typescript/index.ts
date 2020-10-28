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