import { combineReducers} from 'redux';
import storyReducer from './storyReducer';
import postReducer from './postReducer';

export default combineReducers({
  storyReducer, postReducer
})
