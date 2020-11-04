import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './Header/Header';
import Page from './Page/Page';
import FoldersPage from './FoldersPage/FoldersPage';
import NotePage from './NotePage/NotePage';
import Context from './context';


/*

CURRENT PROBLEMS:
- site crashes upon refresh from FoldersPage or NotesPage
- site crashes when "Delete Note" is clicked from NotesPage

*/

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      folder: "all",
      note: "",
      foldersStore: {},
      notesStore: {},
    };
  }

  folderSelect = (folder) => {
    this.setState({
        folder
    })
  }

  resetToAll = () => {
    this.setState({
      folder: "all"
    })
  }

  noteSelect = (note) => {
    this.setState({
      note
    })
  }

  apiFoldersSet = (responseJson) => {
    const foldersObject = responseJson;
    this.setState({
      foldersStore: foldersObject,
    })
  }

  apiNotesSet = (responseJson) => {
    const notesObject = responseJson;
    this.setState({
      notesStore: notesObject,
    })
  }

  deleteNote = (noteId, props) => {
    const newNotes = this.state.notesStore.filter(note => 
      note.id !== noteId
    )
    this.setState({
      notesStore: newNotes
    })
  }

  componentDidMount() {
    fetch("http://localhost:9090/folders", {
      method: 'GET'
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(res.status)
        }
        return res.json()
      })
      .then(responseJson => this.apiFoldersSet(responseJson))

      fetch("http://localhost:9090/notes", {
        method: 'GET'
      })
        .then(res => {
          if (!res.ok) {
            throw new Error(res.status)
          }
          return res.json()
        })
        .then(responseJson => this.apiNotesSet(responseJson))
        
  }

  render() {

    const contextValue = {
      notesStore: this.state.notesStore,
      foldersStore: this.state.foldersStore,
      folder: this.state.folder,
      note: this.state.note,
      handleFolderSelect: this.folderSelect,
      handleNoteSelect: this.noteSelect,
      handleDeleteNote: this.deleteNote,
    }

    return (
      <main className='App'>
        <Header
          handleReset={this.resetToAll}
        />
        <Context.Provider value={contextValue}>
          <Route
            exact path='/'
            component={Page}
          />
          <Route
            path="/folder/:folderName"
            component={FoldersPage}
            />
          <Route
              path="/note/:noteName"
              component={NotePage}
          />
        </Context.Provider>
      </main>
    );
  }
}

export default App;