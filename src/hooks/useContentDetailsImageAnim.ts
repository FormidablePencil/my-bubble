import { useState } from "react"
import { config, useSpring } from "react-spring"

const useContentDetailsImageAnim = () => {
  const [accordionOpen, setAccordionOpen] = useState(null)

  const imageAnim = useSpring({
    to: !accordionOpen
      ? { transform: 'scale(1.6)', margin: 100, }
      : { transform: 'scale(1)', margin: 20, },
    from: {
      transform: 'scale(1)',
      margin: 20,
    },
    config: config.default
  })

  const onClickHandler = (num) => {
    setAccordionOpen(prev => {
      if (prev === num) return 0
      else return num
    })
  }

  return { accordionOpen, imageAnim, onClickHandler }
}

export default useContentDetailsImageAnim