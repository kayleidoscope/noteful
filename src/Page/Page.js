import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import NoteList from '../NoteList/NoteList';
import './Page.css';

class Page extends Component {

  render() {
    return (
      <div className="page-group">
        <Sidebar
          dummyStore={this.props.dummyStore}
          handleFolderSelect={this.props.handleFolderSelect}
        />
        <NoteList
          dummyStore={this.props.dummyStore}
          currentFolder={this.props.folder}
          handleNoteSelect={this.props.handleNoteSelect}
        />
      </div>
    );
  }
}

export default Page;