import React from 'react';
import {TONES, NOTE_NAMES} from '../../util/tones';
import Note from '../../util/note';




class Synth extends React.Component {
  constructor(props) {
    super(props);
    this.notes = NOTE_NAMES.map(name => new Note (TONES[name]));
    this.noteGetter = this.noteGetter.bind(this);
  }
  noteGetter(){
    return NOTE_NAMES.map((note) => {
      return <li>{note}</li>;
    });
  }

  render(){
    // debugger

    return(
      <ul>
        {
          this.noteGetter()
        }
      </ul>
    );
  }

}

export default Synth;
