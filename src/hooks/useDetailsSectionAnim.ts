import { useRef } from "react"
import { useSelector } from "react-redux"
import { rootReducerT } from "../store"

function useDetailsSectionAnim() {
  const contentDetailSectionIsClosed = useSelector((state: rootReducerT) => state.contentDetailSectionIsClosed)


  // const animToggleAppearenceOfDetailsSection = useSpring({
  //   to: contentDetailSectionIsClosed ? {
  //     transform: 'translateY(-355px)',
  //   } : {
  //       transform: 'translateY(0px)',
  //     },
  //   from: {
  //     transform: 'translateY(-355px)',
  //   },
  // })

  const animToggleAppearenceOfDetailsSection =
    contentDetailSectionIsClosed ? 'projectContentDetails-out' : 'projectContentDetails-in'

  return {
    animToggleAppearenceOfDetailsSection,
  }
}

export default useDetailsSectionAnim
