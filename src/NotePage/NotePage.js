import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import NoteCard from '../NoteCard/NoteCard';
import NoteInfo from '../NoteInfo/NoteInfo';
import './NotePage.css';

class NotePage extends Component {
    render() {
        const currentNote = this.props.currentNote;
        const currentFolder = this.props.currentFolder;
        const dummyNotes = this.props.dummyStore.notes;
        let thisCard = Object.keys(dummyNotes).map((note, i) => {
            if(dummyNotes[i].id === currentNote) {
                console.log(dummyNotes[i].id)
                console.log(currentNote)
                return (
                    <div className="note-route-main">
                        <NoteCard
                            noteName={dummyNotes[i].name}
                            dateModified={dummyNotes[i].modified}
                            folderId={dummyNotes[i].folderId}
                            currentNote={currentNote}
                            page="note"
                            noteId={dummyNotes[i].id}
                        /> 
                        <NoteInfo
                            noteContent={dummyNotes[i].content}
                        />
                    </div>
                )
            }
        })

        return (
            <div className="folders-page-group">
                <Sidebar
                    dummyStore={this.props.dummyStore}
                    handleFolderSelect={this.props.handleFolderSelect}
                    currentFolder={currentFolder}
                    page="note"
                    goBack={true}
                />
                {thisCard}
            </div>
        );
        }
}

export default NotePage;

/* 

I'll need to add a new state that's for what notecard has been clicked.

*/