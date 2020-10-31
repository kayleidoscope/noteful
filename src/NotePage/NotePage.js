import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import NoteCard from '../NoteCard/NoteCard';
import NoteInfo from '../NoteInfo/NoteInfo';
import './NotePage.css';

class NotePage extends Component {
    render() {
        const noteName = this.props.match.params.noteName;
        const currentFolder = this.props.currentFolder;
        const dummyNotes = this.props.dummyStore.notes;
        const currentNote = dummyNotes.find(note => note.name === noteName)

        return (
            <div className="folders-page-group">
                <Sidebar
                    dummyStore={this.props.dummyStore}
                    handleFolderSelect={this.props.handleFolderSelect}
                    currentFolder={currentFolder}
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
                            handleNoteSelect={this.props.handleNoteSelect}
                        /> 
                        <NoteInfo
                            noteContent={currentNote.content}
                        />
                </div>
            </div>
        );
        }
}

export default NotePage;