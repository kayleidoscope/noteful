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
      note: "d26e1074-ffaf-11e8-8eb2-f2801f1b9fd1",
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
    console.log(note)
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
          path="/folder"
          render={() =>
            <FoldersPage
            dummyStore={dummyStore}
            handleFolderSelect={this.folderSelect}
            handleNoteSelect={this.noteSelect}
            />
          }
          />
        <Route
            path="/note"
            render={() => 
              <NotePage
                dummyStore={dummyStore}
                currentNote={this.state.note}
                currentFolder={this.state.folder}
                handleFolderSelect={this.folderSelect}
                handleNoteSelect={this.noteSelect}
              />
            }
        />
      </main>
    );
  }
}

export default App;

/*
main > important = BLANK NOTE LIST
> important = ok
> super = ok
> spangley = ok



*/