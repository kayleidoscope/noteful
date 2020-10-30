import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import NoteCard from '../NoteCard/NoteCard';
import NoteInfo from '../NoteInfo/NoteInfo';
import './NotePage.css';

class NotePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
          card: "d26e1074-ffaf-11e8-8eb2-f2801f1b9fd1",
        };
    }

    folderSelect = (folder) => {
        console.log("folder clicked!")
        this.setState({
            folder
        })
        console.log(this.state.folder)
    }
    
    render() {
        const dummyNotes = this.props.dummyStore.notes;
        let thisCard = Object.keys(dummyNotes).map((note, i) => {
            if(dummyNotes[i].id === this.state.card) {
                return (
                    <div className="note-route-main">
                        <NoteCard
                            noteName={dummyNotes[i].name}
                            dateModified={dummyNotes[i].modified}
                            folderId={dummyNotes[i].folderId}
                            selectedCard={this.state.card}
                            page="note"
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
                    handleFolderSelect={this.folderSelect}
                    currentFolder={this.state.folder}
                    page="note"
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