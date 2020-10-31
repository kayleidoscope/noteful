import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './Header/Header';
import Page from './Page/Page';
import FoldersPage from './FoldersPage/FoldersPage';
import NotePage from './NotePage/NotePage';
import dummyStore from './dummy-store';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      folder: "all",
      note: "",
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

  render() {
    return (
      <main className='App'>
        <Header
          handleReset={this.resetToAll}
        />
        <Route
          exact path='/'
          render={() =>        
            <Page
              dummyStore={dummyStore}
              folder={this.state.folder}
              handleFolderSelect={this.folderSelect}
              handleNoteSelect={this.noteSelect}
            />
          }
        />
        <Route
          path="/folder/:folderName"
          render={(props) =>
            <FoldersPage
            currentFolder={this.state.folder}
            dummyStore={dummyStore}
            handleFolderSelect={this.folderSelect}
            handleNoteSelect={this.noteSelect}
            match={props.match}
            />
          }
          />
        <Route
            path="/note/:noteName"
            render={(props) =>
              <NotePage
                dummyStore={dummyStore}
                currentFolderId={this.state.folder}
                handleFolderSelect={this.folderSelect}
                handleNoteSelect={this.noteSelect}
                history={props.history}
                match={props.match}
              />
            }
        />
      </main>
    );
  }
}

export default App;