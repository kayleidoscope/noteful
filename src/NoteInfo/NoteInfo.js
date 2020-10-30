import React from 'react';
import NoteCard from '../NoteCard/NoteCard';
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