import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SELECTED_PROJECT } from "../../../../../actions/types";
import { rootReducerT } from "../../../../../store";

type T = number | void

const useNavigateProjects = () => {
  const projectDataCollection = useSelector((state: rootReducerT) => state.projectDataCollection)
  const currentSubjectViewing = useSelector((state: rootReducerT) => state.currentSubjectViewing)
  const dispatch = useDispatch()


  const indexOfAvailableProjects: any = useMemo(() =>
    projectDataCollection.map((project, index) => project.showInPortfolio && index).filter(item => item),
    [projectDataCollection])

    console.log(indexOfAvailableProjects, 'indexOfAvailableProjects')

  const doesProjectExistByNumExist = ({ checkIfProjIndexExists, directionForward }) => {
    const checkIfIndexExistsInAvailableProjects = (navigateTo): T =>
      indexOfAvailableProjects.filter(itemIndex => itemIndex === navigateTo)[0];

    const iterateDirection = {
      iterateUp: (): T => {
          for (let navigateTo = currentSubjectViewing + checkIfProjIndexExists; navigateTo < indexOfAvailableProjects.length; navigateTo++) {
            const foundNumber = checkIfIndexExistsInAvailableProjects(navigateTo)
            console.log(foundNumber, 'foundNumber')
            if (foundNumber > currentSubjectViewing) return foundNumber

          }
      },
      iterateDown: (): T => {
          for (let navigateTo = currentSubjectViewing - checkIfProjIndexExists; navigateTo < indexOfAvailableProjects.length; navigateTo--) {
            const foundNumber = checkIfIndexExistsInAvailableProjects(navigateTo)
            if (foundNumber < currentSubjectViewing) return foundNumber
          }
      }
    }

    if (directionForward) return iterateDirection.iterateUp()
    if (!directionForward) return iterateDirection.iterateDown()
  }


  const findNextAvailableProject = ({ directionForward }) => {
    for (let checkIfProjIndexExists = 0; checkIfProjIndexExists < projectDataCollection.length; checkIfProjIndexExists++) {
      const foundNextProjectIndex: T = doesProjectExistByNumExist({ checkIfProjIndexExists, directionForward })
      if (typeof foundNextProjectIndex === 'number') return foundNextProjectIndex
    }
  }


  const navigateToNearestAvailableProject = ({ directionForward }) => {
    const foundNextProjectIndex = findNextAvailableProject({ directionForward })
    console.log(foundNextProjectIndex, 'foundNextProjectIndex')
    if (typeof foundNextProjectIndex === 'number')
      dispatch({ type: SELECTED_PROJECT, payload: foundNextProjectIndex })

  }

  const navigateToNextProject = () => navigateToNearestAvailableProject({ directionForward: true })
  const navigateToPrevProject = () => navigateToNearestAvailableProject({ directionForward: false })

  return { navigateToNextProject, navigateToPrevProject }
}


export default useNavigateProjects
