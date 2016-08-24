import {NotesConstants} from '../actions/note_actions';


const notesReducer = function (state = [], action) {
  const validKeys = ['a', 's', 'd', 'f', 'g'];
  switch (action.type) {
    case NotesConstants.KEY_PRESSED:
      if (validKeys.includes(action.key) && state.includes(action.key)) {
        return state;
      } else {
        let newState = [...state, action.key];
        return newState;
      }
    case NotesConstants.KEY_RELEASED:
      if (state.includes(action.key)) {
        let i = state.indexOf(action.key);
        let newState = state.slice();
        delete newState[i];
        return newState;
      } else {
        return state;
      }
    default:
      return state;
  }
};


const keyMap = {
  'a': 'C5',
  's': 'D5',
  'd': 'E5',
  'f': 'F5',
  'g': 'G5'
};
// window.NotesConstants = NotesConstants;
export default notesReducer;
