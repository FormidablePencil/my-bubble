import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import fetchAllProjectData from '../actions/fetchAllPortfolioData'

function useFetchAllPortfolioData() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllProjectData())
  }, [dispatch])

}

export default useFetchAllPortfolioData
