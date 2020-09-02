import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { rootReducerT } from '../store'
import fetchAllProjectData from '../actions/fetchAllPortfolioData'

function useFetchAllPortfolioData() {
  const dispatch = useDispatch()
  const { projectDataCollection, techDataCollection } = useSelector((state: rootReducerT) => state)

  useEffect(() => {
    if (!projectDataCollection.length && !techDataCollection.length) dispatch(fetchAllProjectData())
    // eslint-disable-next-line
  }, [])

}

export default useFetchAllPortfolioData
