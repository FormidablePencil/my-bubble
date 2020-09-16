import { FETCHED_ALL_PROJECT_DATA, FETCHED_ALL_TECH_DATA } from './types'

const fetchAllProjectData = () => async (dispatch) => {
  const fetchedData = await fetch('http://10.0.0.7:8000/retrieveAllData')
  if (fetchedData.status === 404) return 
  const data = await fetchedData.json()
  dispatch({ type: FETCHED_ALL_PROJECT_DATA, payload: data.projectCollection })
  dispatch({ type: FETCHED_ALL_TECH_DATA, payload: data.techCollection })
}

export default fetchAllProjectData