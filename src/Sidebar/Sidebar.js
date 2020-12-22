import React, { Component } from 'react';
import FolderList from '../FolderList/FolderList';
import Context from '../context';
import GoBack from '../GoBack/GoBack';
import PropTypes from 'prop-types';
import '../Page/Page.css';
import './Sidebar.css';

class Sidebar extends Component {
  static contextType = Context;

  render() {

    if (this.props.canGoBack) {
      return (
        <aside className="page-sidebar">
          <GoBack history={this.props.history} />
        </aside>
      );
    } else if (this.props.folderSidebar) {
      const allNotes = this.context.notesStore;

      const notesInFolder = allNotes.filter(note => 
        note.folder === this.context.folder
      )

      const numOfNotes = notesInFolder.length

      const folderName = this.props.folderName;
      return (
        <aside className="page-sidebar">
          <FolderList/>
          <h3 className="sidebar-folder-name">
            Folder selected: <br/>
            {folderName}
          </h3>
          <p  className="sidebar-folder-name">
            Number of Notes: <br />
            {numOfNotes}
          </p>
        </aside>
      );
    } else {
      return (
        <aside className="page-sidebar">
          <FolderList/>
        </aside>
      );
    }
  }
}

Sidebar.propTypes = {
  folderSidebar: PropTypes.bool,
  folderName: PropTypes.string,
  page: PropTypes.string,
  history: PropTypes.object,
  canGoBack: PropTypes.bool,
}

export default Sidebar;