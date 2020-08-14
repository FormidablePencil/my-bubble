import React from 'react'
import { Button } from '@material-ui/core'
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa'
import ScrollArea from 'react-scrollbar'
import { useSelector } from 'react-redux'
import { rootReducerT } from '../../../store'

function SubjectImageShowcase() {
  const { projectDataCollection, currentSubjectViewing } = useSelector((state: rootReducerT) => state)

  // imageUrl={typeof currentSubjectViewing === 'number' &&
  // projectDataCollection[currentSubjectViewing] ?
  // projectDataCollection[currentSubjectViewing].images[0] : null}
  return (
    <div className="content">

      {/* //* mobile and desktop app will have a different layout here */}
      {/* <img src={reactNative} alt={imageInWords} /> */}

      <div className="arrowContainer">
        <Button onClick={() => console.log('object')}>
          <FaChevronCircleLeft size={30} />
        </Button>
      </div>
      <img className='imgMain'
        // style={{width: '40px'}}
        src={typeof currentSubjectViewing === 'number' &&
          projectDataCollection[currentSubjectViewing] ?
          projectDataCollection[currentSubjectViewing].images[0] : '123'} alt='' />
      <div className="arrowContainer">
        <Button onClick={() => console.log('object')}>
          <FaChevronCircleRight size={30} />
        </Button>
      </div>

      <ScrollArea
        className=''
        speed={0.8}
        // className="area"
        contentClassName="scrollArea"
        horizontal={false}
      >
        <div className="scrollableImageSelector row">
          <div className="moreimgsGalleryContainer">
            {typeof currentSubjectViewing === 'number' &&
              projectDataCollection[currentSubjectViewing] &&
              projectDataCollection[currentSubjectViewing].images.map((url, index) => {
                let classname = 'mr'
                if (index === projectDataCollection[currentSubjectViewing].images.length - 1) classname = ''
                return (
                  <div className="item" key={index}>
                    <img className={classname} src={url} alt='app' />
                  </div>
                )
              })}
          </div>
        </div>
      </ScrollArea>

    </div>
  )
}

export default SubjectImageShowcase
