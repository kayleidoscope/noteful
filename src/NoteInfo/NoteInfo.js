import React from 'react';
import './NoteInfo.css';
import PropTypes from 'prop-types';

function NoteInfo(props) {
    const content = props.noteContent;
  return (
    <p className="note-info">
        {content}
    </p>
  );
}

NoteInfo.propTypes = {
  noteContent: PropTypes.string.isRequired,
}

export default NoteInfo;