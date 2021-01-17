import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SELECTED_PROJECT } from "../../../../../actions/types";
import { rootReducerT } from "../../../../../store";
import { clickProjectGA } from '../../../../../App'

const useNavigateProjects = () => {
  const projectDataCollection = useSelector((state: rootReducerT) => state.projectDataCollection)
  const currentSubjectViewing = useSelector((state: rootReducerT) => state.currentSubjectViewing)
  const dispatch = useDispatch()

  const indexOfAvailableProjects: any = useMemo(() =>
    projectDataCollection.map((project, index) => project.showInPortfolio && index).filter(item => typeof item === 'number'),
    [projectDataCollection])

  // funk to so if is lowest or highest available index
  const ifCanGoAnyFarther = ({ direction }) => {
    const getLargestNum = (prevValue, currentValue) => prevValue > currentValue ? prevValue : currentValue
    const getSmallestNum = (prevValue, currentValue) => prevValue < currentValue ? prevValue : currentValue
    if (direction === 'previous') {
      if (indexOfAvailableProjects.reduce(getSmallestNum) === currentSubjectViewing) return false
    } else if (direction === 'next') {
      if (indexOfAvailableProjects.reduce(getLargestNum) === currentSubjectViewing) return false
    }
    return true
  }

  const navigateNextProject = () => {
    let navigateToProject = indexOfAvailableProjects.filter(projectIndex => projectIndex > currentSubjectViewing)[0]
    if (typeof navigateToProject !== 'number') return
    dispatch({ type: SELECTED_PROJECT, payload: navigateToProject })
  }

  const navigatePrevProject = () => {
    let indexOfPossiblePrevProjects = indexOfAvailableProjects.filter(projectIndex => projectIndex < currentSubjectViewing)
    if (typeof indexOfPossiblePrevProjects[0] !== 'number') return
    const getSmallestNum = (prevValue, currentValue) => prevValue > currentValue ? prevValue : currentValue
    let prevProject = indexOfPossiblePrevProjects.reduce(getSmallestNum)
    if (typeof prevProject !== 'number') return
    clickProjectGA({projectName: projectDataCollection[prevProject].title})
    dispatch({ type: SELECTED_PROJECT, payload: prevProject })
  }

  /* make it loop */
  /* if viewing desktop images then transition out before navigating */

  return { navigatePrevProject, navigateNextProject, ifCanGoAnyFarther }
}

export default useNavigateProjects
