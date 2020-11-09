import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import NoteCard from '../NoteCard/NoteCard';
import NoteInfo from '../NoteInfo/NoteInfo';
import PropTypes from 'prop-types';
import Context from '../context';
import './NotePage.css';

class NotePage extends Component {
    static contextType = Context;

    render() {
        const noteName = this.props.match.params.noteName;
        const dummyNotes = this.context.notesStore;
        const currentNote = dummyNotes.find(note => note.name === noteName)

        return currentNote ? (
            <div className="folders-page-group">
                <Sidebar
                    page="note"
                    canGoBack={true}
                    history={this.props.history}
                />
                <div className="note-route-main" key={currentNote.id}>
                    <NoteCard
                            noteName={currentNote.name}
                            dateModified={currentNote.modified}
                            folderId={currentNote.folderId}
                            currentNote={currentNote}
                            page="note"
                            noteId={currentNote.id}
                            match={this.props.match}
                            history={this.props.history}
                        /> 
                        <NoteInfo
                            noteContent={currentNote.content}
                        />
                </div>
            </div>
        ) : "Note not found";
        }
}

NotePage.propTypes = {
    page: PropTypes.string,
    canGoBack: PropTypes.bool,
    history: PropTypes.object,
    noteName: PropTypes.string,
    dateModified: PropTypes.string,
    folderId: PropTypes.string,
    currentNote: PropTypes.string,
    noteId: PropTypes.string,
    match: PropTypes.object,
    noteContent: PropTypes.string,
}

export default NotePage;