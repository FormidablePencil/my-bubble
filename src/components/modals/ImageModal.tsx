import React from 'react'
import { Lightbox } from "react-modal-image";
import { useDispatch, useSelector } from 'react-redux';
import { TOGGLE_IMAGE_MODAL } from '../../actions/types';
import { rootReducerT } from '../../store';

function ImageModal() {
  const {
    currentSubjectViewing,
    projectDataCollection,
    ImageModelToggle
  } = useSelector((state: rootReducerT) => state)
  const dispatch = useDispatch()

  const toggleImageModel = () =>
    dispatch({ type: TOGGLE_IMAGE_MODAL })


  if (ImageModelToggle)
    if (projectDataCollection[currentSubjectViewing])
      return (
        <div style={{ zIndex: 5000 }}>
          <Lightbox
            large={projectDataCollection[currentSubjectViewing].images[1]}
            onClose={toggleImageModel}
          />
        </div>
      )
    else return null
  else return null
}

export default ImageModal
