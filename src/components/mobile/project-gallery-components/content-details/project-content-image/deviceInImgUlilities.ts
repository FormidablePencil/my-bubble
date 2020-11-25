import { projectDataT } from "../../../../../reducers/projectDataReducer";


export interface whatTypeOfImagesAvailableRefT {
  current: { [index: number]: 'both' | 'mobile' | 'desktop' }
}

const filterImagesForSpecifiedDevice = (project: projectDataT, device) =>
  project.images.filter(image => image.device === device)

const imageAvailability = ({ mobileImages, desktopImages }) => {
  switch (true) {
    case mobileImages.length > 0 && desktopImages.length > 0:
      return 'both'
    case mobileImages.length:
      return 'mobile'
    case desktopImages.length > 0:
      return 'desktop'
    default:
      return 'mobile'
  }
}

export {
  imageAvailability,
  filterImagesForSpecifiedDevice,
}