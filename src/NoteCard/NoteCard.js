import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import './NoteCard.css';

function NoteCard(props) {
    const noteName = props.noteName;
    const dateModified = props.dateModified;
    const dateFormatted = moment(dateModified).format('MMM Do, YYYY');
    const noteId = props.noteId;
    return (
    <li 
    className="note-card"
    >
        <Link 
            to={`/note/${noteName}`}
            className="title-btn"
            onClick={() => props.handleNoteSelect(noteId)}
        >
            <h2>{noteName}</h2>
        </Link>
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