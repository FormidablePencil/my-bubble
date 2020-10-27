import { useSpring } from "react-spring"
import { useState, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { rootReducerT } from "../store"
import { TOGGLE_CONTENT_DETAILS_SECTION } from "../actions/types"

function useDetailsSectionAnim() {
  const { contentDetailSectionIsClosed } = useSelector((state: rootReducerT) => state)
  // const [animCameToCompleteStop, setAnimCameToCompleteStop] = useState(false)

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
