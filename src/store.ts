import projectDataReducer, { projectDataT } from './reducers/projectDataReducer'
import techDataReducer, { techDataT } from './reducers/techDataReducer'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import currentSubjectViewingReducer, { currentlyViewingT } from './reducers/currentSubjectViewingReducer'
import currentTechViewingReducer from './reducers/currentTechViewingReducer'
import contentDetailsSectionDirIsRowReducer from './reducers/contentDetailsSectionDirIsRowReducer'
import imageModelToggleReducer from './reducers/imageModelToggleReducer'
import contentDetailSectionIsClosedReducer from './reducers/contentDetailSectionIsClosedReducer'
import modalImageSelectedReducer from './reducers/modalImageSelectedReducer'
import detailsSectionToggleMobileReducer from './reducers/detailsSectionToggleMobileReducer'
import pagesLoadedAtLeastOnceReducer, { pagesLoadedAtLeastOnceT } from './reducers/pagesLoadedAtLeastOnceReducer'
import leavingPageAnimReducer from './reducers/leavingPageAnimReducer'

export interface rootReducerT {
  projectDataCollection: projectDataT[],
  techDataCollection: techDataT[],
  currentSubjectViewing: currentlyViewingT,
  currentTechViewing: currentlyViewingT,
  contentDetailsSectionDirIsRow: boolean,
  imageModelToggle: boolean,
  contentDetailSectionIsClosed: boolean,
  modalImageSelected: number,
  detailsSectionToggleMobile: boolean,
  pageRenderAmounts: pagesLoadedAtLeastOnceT,
  leavingPageAnim: boolean,
}
const rootReducer = combineReducers<rootReducerT>({
  projectDataCollection: projectDataReducer,
  techDataCollection: techDataReducer,
  currentSubjectViewing: currentSubjectViewingReducer,
  currentTechViewing: currentTechViewingReducer,
  contentDetailsSectionDirIsRow: contentDetailsSectionDirIsRowReducer,
  imageModelToggle: imageModelToggleReducer,
  contentDetailSectionIsClosed: contentDetailSectionIsClosedReducer,
  modalImageSelected: modalImageSelectedReducer,
  detailsSectionToggleMobile: detailsSectionToggleMobileReducer,
  pageRenderAmounts: pagesLoadedAtLeastOnceReducer,
  leavingPageAnim: leavingPageAnimReducer,
})

const initialState = {}

const middleware = [thunk]

const configureStore = () => createStore(rootReducer, initialState, applyMiddleware(...middleware))

export default configureStore
