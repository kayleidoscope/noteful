import React, { Component } from 'react';
import NoteCard from '../NoteCard/NoteCard';
import NoteInfo from '../NoteInfo/NoteInfo';
import '../Page/Page.css';
import './NoteList.css';

class NoteList extends Component {

  render() {
    const dummyStore = this.props.dummyStore;
    const dummyNotes = dummyStore.notes;
    let noteCardList = {};
    let filteredCards = {};
    if (this.props.currentFolder === "all") {
      noteCardList = Object.keys(dummyNotes).map((note, i) => {
        const noteKey = `${dummyNotes[i].folderId}-${dummyNotes[i].id}`
        return (
          <div
          key={noteKey}
          >
            <NoteCard
              noteName={dummyNotes[i].name}
              dateModified={dummyNotes[i].modified}
              folderId={dummyNotes[i].folderId}
              handleNoteSelect={this.props.handleNoteSelect}
              noteId={dummyNotes[i].id}
            />
            {/* <NoteInfo
              noteContent={dummyNotes[i].content}
            /> */}
          </div>
        )
      })
    } else {
      filteredCards = dummyNotes.filter(folder =>  folder.folderId === this.props.currentFolder)
      noteCardList = Object.keys(filteredCards).map((note, i) => {
        const noteKey = `${filteredCards[i].folderId}-${filteredCards[i].id}`
        return (
          <div
          key={noteKey}
          >
            <NoteCard
              noteName={filteredCards[i].name}
              dateModified={filteredCards[i].modified}
              folderId={filteredCards[i].folderId}
              handleNoteSelect={this.props.handleNoteSelect}
              noteId={dummyNotes[i].id}
            />
            {/* <NoteInfo
              noteContent={dummyNotes[i].content}
            /> */}
          </div>
        )
      })
    }
    return (
      <main className="page-note-list">
        <ul className="page-ul">
          {noteCardList}
        </ul>
        <button className="addcard-button">
          Add Card
        </button>
      </main>
    );
  }
}

export default NoteList;