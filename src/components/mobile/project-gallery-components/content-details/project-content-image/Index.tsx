import React from 'react'
import { useSelector } from 'react-redux'
import { config, animated, useSpring } from 'react-spring'
import { rootReducerT } from '../../../../../store'
import ImageInDevice from '../../../../reusables/image-in-device'

function ProjectContentImage({ accordionOpen, onClickHandler }) {
  const projectDataCollection = useSelector((state: rootReducerT) => state.projectDataCollection)
  const currentSubjectViewing = useSelector((state: rootReducerT) => state.currentSubjectViewing)

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

  return (
    <animated.div
      style={imageAnim}
      onClick={() => onClickHandler(0)}
    >
      {/* 
        //~ make library

//~ render frame depending on images[?].device
//~ add a switch to toggle between image and desktop images
*/}

      <ImageInDevice
        projectData={projectDataCollection[currentSubjectViewing]}
        indexOfImageIfNotSwipable={1}
        swipable={true}
        autoPlay={true}
      />

    </animated.div>
  )
}

export default ProjectContentImage
