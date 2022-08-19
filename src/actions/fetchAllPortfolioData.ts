import { sortProjects } from '../staticData'
import { FETCHED_ALL_PROJECT_DATA, FETCHED_ALL_TECH_DATA } from './types'

const fetchAllProjectData = () => async (dispatch) => {
  const fetchedData = await fetch('https://portfolio-server-359819.uc.r.appspot.com/retrieveAllData')
  // const fetchedData = await fetch('https://portfolio--my-bubble-server.herokuapp.com/retrieveAllData')
  if (fetchedData.status === 404) return
  let data = await fetchedData.json()
  const sortedProjects = sortProjects(data.projectCollection)
  dispatch({ type: FETCHED_ALL_PROJECT_DATA, payload: sortedProjects })
  dispatch({ type: FETCHED_ALL_TECH_DATA, payload: data.techCollection })
}

export default fetchAllProjectData
