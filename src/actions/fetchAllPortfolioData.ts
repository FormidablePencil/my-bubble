import { FETCHED_ALL_PROJECT_DATA, FETCHED_ALL_TECH_DATA } from './types'

const fetchAllProjectData = () => async (dispatch) => {
  const fetchedData = await fetch('https://vibrant-ring-296422.wl.r.appspot.com/retrieveAllData')
  if (fetchedData.status === 404) return
  let data = await fetchedData.json()
  dispatch({ type: FETCHED_ALL_PROJECT_DATA, payload: data.projectCollection })
  dispatch({ type: FETCHED_ALL_TECH_DATA, payload: data.techCollection })
}

export default fetchAllProjectData
