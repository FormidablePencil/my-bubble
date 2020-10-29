export interface sortedProjectDataT {
  status: number
  general: {
    title: string
    description: string
    type: string
  }
  links: {
    client?: string
    server?: string
    cms?: string
    blog?: string
  },
  technologies: []
}