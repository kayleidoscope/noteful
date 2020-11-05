import React, { Component } from 'react';
import NoteCard from '../NoteCard/NoteCard';
import Context from '../context';
import '../Page/Page.css';
import './NoteList.css';

class NoteList extends Component {
  static contextType = Context;

  render() {
    const dummyNotes = this.context.notesStore;
    let noteCardList = {};
    let filteredCards = {};
    if (this.context.folder === "all") {
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
              noteId={dummyNotes[i].id}
              match={this.props.match}
              history={this.props.history}
            />
          </div>
        )
      })
    } else {
      filteredCards = dummyNotes.filter(folder =>  folder.folderId === this.context.folder)
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
              noteId={filteredCards[i].id}
              match={this.props.match}
              history={this.props.history}
            />
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