import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Context from '../context';
import moment from 'moment';
import './NoteCard.css';

class NoteCard extends Component {
    static contextType = Context;

    deleteNoteRequest(noteId, callback) {
        console.log("deleteNote ran")
        fetch("http://localhost:9090/notes" + `/${noteId}`, {
          method: 'DELETE',
          headers: {
              'content-type': 'application/json'
          }
        })
        .then(res => {
            if (!res.ok) {
              throw new Error(res.status)
            }
            return res.json()
          })
          .then(data => {
            callback(noteId)
            if (this.props.match.path.includes('note')) {
                this.props.history.push('/')
            }
          })
          .catch(error => {
            console.error(error)
          })
      }

    render() {
        const noteName = this.props.noteName;
        const dateModified = this.props.dateModified;
        const dateFormatted = moment(dateModified).format('MMM Do, YYYY');
        const noteId = this.props.noteId;
        return (
        <li 
        className="note-card"
        >
            <Link 
                to={`/note/${noteName}`}
                className="title-btn"
                onClick={() => this.context.handleNoteSelect(noteId)}
            >
                <h2>{noteName}</h2>
            </Link>
            <div className="note-group">
            <p>Last modified on {dateFormatted}</p>
                <button 
                    className="delete-button"
                    onClick={() => this.deleteNoteRequest(
                        noteId,
                        this.context.handleDeleteNote)}
                >
                    Delete Note
                </button>
            </div>
        </li>
      );
    }
}

export default NoteCard;