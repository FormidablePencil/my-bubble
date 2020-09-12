import { useSpring } from "react-spring"
import { useState, useRef } from "react"

function useDetailsSectionAnim() {
  const [shrunkElement, setShrunkElement] = useState(true)
  const [animCameToCompleteStop, setAnimCameToCompleteStop] = useState(true)

  const browsingSectionRef: any = useRef(null)

  const hideDetailsSection = () => {
    if (!shrunkElement && animCameToCompleteStop) {
      setAnimCameToCompleteStop(false)
      setShrunkElement(prev => !prev && true)
    }
  }

  const showDetailsSection = (e) => {
    if (animCameToCompleteStop) {
      setAnimCameToCompleteStop(false)
      setShrunkElement(false) //also when clicking on a card 
    }
  }

  const animToggleAppearenceOfDetailsSection = useSpring({
    to: shrunkElement ? {
      transform: 'translateY(-350px)',
    } : {
      transform: 'translateY(0px)',
      },
    from: {
      transform: 'translateY(-350px)',
      },
    onRest: () => setAnimCameToCompleteStop(true)
  })

  return {
    animToggleAppearenceOfDetailsSection, showDetailsSection,
    hideDetailsSection,
    browsingSectionRef, shrunkElement
  }
}

export default useDetailsSectionAnim
