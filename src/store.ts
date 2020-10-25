import projectDataReducer, { projectDataT } from './reducers/projectDataReducer'
import techDataReducer, { techDataT } from './reducers/techDataReducer'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import currentSubjectViewingReducer, { currentlyViewingT } from './reducers/currentSubjectViewingReducer'
import currentTechViewingReducer from './reducers/currentTechViewingReducer'
import contentDetailsSectionDirIsRowReducer from './reducers/contentDetailsSectionDirIsRowReducer'
import ImageModelToggleReducer from './reducers/ImageModelToggleReducer'

export interface rootReducerT {
  projectDataCollection: projectDataT[],
  techDataCollection: techDataT[],
  currentSubjectViewing: currentlyViewingT,
  currentTechViewing: currentlyViewingT,
  contentDetailsSectionDirIsRow: boolean,
  ImageModelToggle: boolean,
}
const rootReducer = combineReducers<rootReducerT>({
  projectDataCollection: projectDataReducer,
  techDataCollection: techDataReducer,
  currentSubjectViewing: currentSubjectViewingReducer,
  currentTechViewing: currentTechViewingReducer,
  contentDetailsSectionDirIsRow: contentDetailsSectionDirIsRowReducer,
  ImageModelToggle: ImageModelToggleReducer,
})

const initialState = {}

const middleware = [thunk]

const configureStore = () => createStore(rootReducer, initialState, applyMiddleware(...middleware))

export default configureStore
