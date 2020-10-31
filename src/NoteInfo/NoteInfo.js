import React from 'react';
import './NoteInfo.css';

function NoteInfo(props) {
    const content = props.noteContent;
  return (
    <p className="note-info">
        {content}
    </p>
  );
}

export default NoteInfo;