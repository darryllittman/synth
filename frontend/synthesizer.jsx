import React from 'react';
import ReactDOM from 'react-dom';
import Note from './util/note';
import {TONES, NOTE_NAMES} from './util/tones';
import notesReducer from './reducers/notes_reducer';
import configureStore from './store/store';
import Root from './components/root';
import Synth from './components/synth/synth';

const synthesizer = document.addEventListener("DOMContentLoaded", () =>{
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={configureStore()}/>, root);
  // ReactDOM.render(<Synth />, root);
});

export default synthesizer;
