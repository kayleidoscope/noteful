import React from 'react';
import moment from 'moment';
import './NoteCard.css';

function NoteCard(props) {
    const noteName = props.noteName;
    const dateModified = props.dateModified;
    const dateFormatted = moment(dateModified).format('MMM Do, YYYY');

    return (
    <li 
    className="note-card"
    >
        <button className="title-btn">
            <h2>{noteName}</h2>
        </button>
        <div className="note-group">
        <p>Last modified on {dateFormatted}</p>
            <button className="delete-button">
                Delete Note
            </button>
        </div>
    </li>
  );
}

export default NoteCard;


// className={`folder-card ${(folderId === currentFolder) ? "selected" : ""}`}