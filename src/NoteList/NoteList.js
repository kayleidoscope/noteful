import React, { Component } from 'react';
import NoteCard from '../NoteCard/NoteCard';
import Context from '../context';
import AddNote from '../AddNote/AddNote';
import PropTypes from 'prop-types';
import NoteError from '../errorPages/NoteError';
import '../Page/Page.css';
import './NoteList.css';

class NoteList extends Component {
  static contextType = Context;

  constructor(props) {
    super(props);
    this.state = {
        newNoteForm: false,
    };
  }

  buttonToForm = (e) => {
    e.preventDefault();
    this.setState({
      newNoteForm: true,
    })
  }

  formToButton = (e) => {
    e.preventDefault();
    this.setState({
      newNoteForm: false,
    })
  }

  render() {
    const dummyNotes = this.context.notesStore;
    let noteCardList = {};
    let filteredCards = {};
    if (this.context.folder === "all") {
      noteCardList = Object.keys(dummyNotes).map((note, i) => {
        const noteKey = `${dummyNotes[i].folderId}-${dummyNotes[i].id}`
        return (
          <NoteError
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
          </NoteError>
        )
      })
    } else {
      filteredCards = dummyNotes.filter(folder =>  folder.folderId === this.context.folder)
      noteCardList = Object.keys(filteredCards).map((note, i) => {
        const noteKey = `${filteredCards[i].folderId}-${filteredCards[i].id}`
        return (
          <NoteError
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
          </NoteError>
        )
      })
    }

    if (this.state.newNoteForm) {
    return (
      <main className="page-note-list">
        <ul className="page-ul">
          {noteCardList}
        </ul>
        <AddNote
          handleFormToButton={this.formToButton}
        />
      </main>
    );
    } else {
      return (
      <main className="page-note-list">
      <ul className="page-ul">
        {noteCardList}
      </ul>
      <form onSubmit={e => this.buttonToForm(e)}>
        <button className="addcard-button">
          Add Note
        </button>
      </form>
    </main>
      )
    }
  }
}

NoteList.propTypes = {
  match: PropTypes.object,
  history: PropTypes.object,
}

export default NoteList;