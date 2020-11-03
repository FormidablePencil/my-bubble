import { useSpring } from "react-spring"
import { useRef } from "react"
import { useSelector } from "react-redux"
import { rootReducerT } from "../store"

function useDetailsSectionAnim() {
  const { contentDetailSectionIsClosed } = useSelector((state: rootReducerT) => state)

  const browsingSectionRef: any = useRef(null)

  const animToggleAppearenceOfDetailsSection = useSpring({
    to: contentDetailSectionIsClosed ? {
      transform: 'translateY(-355px)',
    } : {
        transform: 'translateY(0px)',
      },
    from: {
      transform: 'translateY(-355px)',
    },
    // onRest: () => setAnimCameToCompleteStop(true)
  })

  return {
    animToggleAppearenceOfDetailsSection,
    browsingSectionRef
  }
}

export default useDetailsSectionAnim
