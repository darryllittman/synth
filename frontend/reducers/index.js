import {combineReducers} from 'redux';
import notesReducer from  './notes_reducer';

const reducer = combineReducers({
  notesReducer: notesReducer
});

export default reducer;
